import { randomUUID } from "node:crypto";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { ADMIN_EMAIL, sendMail } from "@/lib/mailer";
import { JobApplication } from "@/lib/models/JobApplication";
import { connectToDatabase } from "@/lib/mongodb";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import sharp from "sharp";

export const runtime = "nodejs";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_FILE_BYTES = 5 * 1024 * 1024; // 5 MB
const ALLOWED_TYPES = new Set([
	"application/pdf",
	"application/msword",
	"application/vnd.openxmlformats-officedocument.wordprocessingml.document",
	"image/png",
	"image/jpeg",
	"image/webp",
]);

function sanitizeFileName(name: string): string {
	return name.replace(/[^a-zA-Z0-9._-]/g, "_").slice(0, 80);
}

export async function POST(request: NextRequest) {
	let form: FormData;
	try {
		form = await request.formData();
	} catch {
		return NextResponse.json(
			{ error: "Invalid form submission." },
			{ status: 400 },
		);
	}

	const jobId = String(form.get("jobId") ?? "").trim();
	const jobTitle = String(form.get("jobTitle") ?? "").trim();
	const fullName = String(form.get("fullName") ?? "").trim();
	const email = String(form.get("email") ?? "")
		.trim()
		.toLowerCase();
	const phone = String(form.get("phone") ?? "").trim();
	const location = String(form.get("location") ?? "").trim();
	const linkedin = String(form.get("linkedin") ?? "").trim();
	const experience = String(form.get("experience") ?? "").trim();
	const coverNote = String(form.get("coverNote") ?? "").trim();
	const resume = form.get("resume");

	if (!jobId || !jobTitle || !fullName || !email || !phone) {
		return NextResponse.json(
			{ error: "Please fill in all required fields." },
			{ status: 400 },
		);
	}

	if (!EMAIL_REGEX.test(email)) {
		return NextResponse.json(
			{ error: "Please enter a valid email address." },
			{ status: 400 },
		);
	}

	if (!(resume instanceof File) || resume.size === 0) {
		return NextResponse.json(
			{ error: "Please attach your resume." },
			{ status: 400 },
		);
	}

	if (resume.size > MAX_FILE_BYTES) {
		return NextResponse.json(
			{ error: "Resume must be 5 MB or smaller." },
			{ status: 400 },
		);
	}

	if (!ALLOWED_TYPES.has(resume.type)) {
		return NextResponse.json(
			{ error: "Resume must be a PDF, Word document, or image." },
			{ status: 400 },
		);
	}

	// Read upload into a buffer; compress when it's an image (via sharp).
	let buffer: Buffer = Buffer.from(await resume.arrayBuffer());
	let ext = path.extname(resume.name) || "";
	let contentType = resume.type;

	if (resume.type.startsWith("image/")) {
		try {
			buffer = Buffer.from(
				await sharp(buffer)
					.resize({
						width: 1600,
						height: 1600,
						fit: "inside",
						withoutEnlargement: true,
					})
					.jpeg({ quality: 72 })
					.toBuffer(),
			);
			ext = ".jpg";
			contentType = "image/jpeg";
		} catch (error) {
			console.error("Job application: failed to compress image resume", error);
		}
	}

	// Save the resume to disk.
	const uploadDir =
		process.env.RESUME_UPLOAD_DIR ??
		path.join(process.cwd(), "uploads", "resumes");
	const storedFileName = `${Date.now()}-${randomUUID().slice(0, 8)}-${sanitizeFileName(
		`${fullName}${ext}`,
	)}`;
	let resumePath = "";

	try {
		await mkdir(uploadDir, { recursive: true });
		resumePath = path.join(uploadDir, storedFileName);
		await writeFile(resumePath, buffer);
	} catch (error) {
		console.error("Job application: failed to save resume to disk", error);
		resumePath = "";
	}

	// Persist to MongoDB (best-effort).
	try {
		await connectToDatabase();
		await JobApplication.create({
			jobId,
			jobTitle,
			fullName,
			email,
			phone,
			location,
			linkedin,
			experience,
			coverNote,
			resumeFileName: storedFileName,
			resumePath,
		});
	} catch (error) {
		console.error("Job application: failed to save to MongoDB", error);
	}

	const adminSubject = `New job application: ${jobTitle} — ${fullName}`;
	const adminText = [
		`New application for: ${jobTitle} (${jobId})`,
		"",
		`Full Name: ${fullName}`,
		`Email: ${email}`,
		`Phone: ${phone}`,
		`Location: ${location || "N/A"}`,
		`LinkedIn: ${linkedin || "N/A"}`,
		`Experience: ${experience || "N/A"}`,
		"",
		"Cover note:",
		coverNote || "N/A",
		"",
		"— Resume attached. Sent from the Sagyboar careers page.",
	].join("\n");

	const userSubject = `Application received — ${jobTitle} at Sagyboar`;
	const userText = [
		`Hi ${fullName},`,
		"",
		`Thanks for applying for the ${jobTitle} role at Sagyboar! We've received your application and resume. Our team will review it and reach out if there's a fit.`,
		"",
		"Best regards,",
		"The Sagyboar Team",
		"",
		"— This is an automated confirmation. Please do not reply.",
	].join("\n");

	try {
		await sendMail({
			to: ADMIN_EMAIL,
			subject: adminSubject,
			text: adminText,
			replyTo: email,
			attachments: [
				{
					filename: `${sanitizeFileName(fullName)}-resume${ext}`,
					content: buffer,
					contentType,
				},
			],
		});
		await sendMail({
			to: email,
			subject: userSubject,
			text: userText,
			bcc: "sujitkumarbhutiaskb@gmail.com",
		});
	} catch (error) {
		console.error("Job application: failed to send email", error);
		return NextResponse.json(
			{
				error:
					"We couldn't submit your application right now. Please try again.",
			},
			{ status: 502 },
		);
	}

	return NextResponse.json(
		{ message: "Your application has been submitted successfully." },
		{ status: 200 },
	);
}
