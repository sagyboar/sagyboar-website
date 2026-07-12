import { ADMIN_EMAIL, sendMail } from "@/lib/mailer";
import { Contact } from "@/lib/models/Contact";
import { connectToDatabase } from "@/lib/mongodb";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
	name?: string;
	email?: string;
	company?: string;
	subject?: string;
	message?: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
	let body: ContactPayload;
	try {
		body = await request.json();
	} catch {
		return NextResponse.json(
			{ error: "Invalid request body" },
			{ status: 400 },
		);
	}

	const name = body.name?.trim();
	const email = body.email?.trim().toLowerCase();
	const company = body.company?.trim() ?? "";
	const subject = body.subject?.trim() ?? "";
	const message = body.message?.trim();

	if (!name || !email || !message) {
		return NextResponse.json(
			{ error: "Name, email, and message are required." },
			{ status: 400 },
		);
	}

	if (!EMAIL_REGEX.test(email)) {
		return NextResponse.json(
			{ error: "Please enter a valid email address." },
			{ status: 400 },
		);
	}

	// Persist to MongoDB (best-effort: don't fail the request if DB is down)
	try {
		await connectToDatabase();
		await Contact.create({ name, email, company, subject, message });
	} catch (error) {
		console.error("Contact: failed to save to MongoDB", error);
	}

	const adminSubject = `New contact form submission${
		subject ? `: ${subject}` : ""
	} — ${name}`;
	const adminText = [
		"New contact form submission:",
		"",
		`Name: ${name}`,
		`Email: ${email}`,
		`Company: ${company || "N/A"}`,
		`Subject: ${subject || "N/A"}`,
		"",
		"Message:",
		message,
		"",
		"— Sent from the Sagyboar website contact form",
	].join("\n");

	const userSubject = "We received your message — Sagyboar";
	const userText = [
		`Hi ${name},`,
		"",
		"Thanks for reaching out to Sagyboar! We've received your message and our team will get back to you within 24–48 business hours.",
		"",
		"Here's a copy of what you sent:",
		subject ? `Subject: ${subject}` : "",
		`Message: ${message}`,
		"",
		"Best regards,",
		"The Sagyboar Team",
		"",
		"— This is an automated confirmation. Please do not reply.",
	]
		.filter(Boolean)
		.join("\n");

	try {
		await sendMail({
			to: ADMIN_EMAIL,
			subject: adminSubject,
			text: adminText,
			replyTo: email,
		});
		await sendMail({ to: email, subject: userSubject, text: userText });
	} catch (error) {
		console.error("Contact: failed to send email", error);
		return NextResponse.json(
			{ error: "We couldn't send your message right now. Please try again." },
			{ status: 502 },
		);
	}

	return NextResponse.json(
		{ message: "Your message has been sent successfully." },
		{ status: 200 },
	);
}
