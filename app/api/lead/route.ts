import { ADMIN_EMAIL, sendMail } from "@/lib/mailer";
import { isValidEmail } from "@/lib/validate-email";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type LeadPayload = {
	email?: string;
	source?: string;
};

export async function POST(request: NextRequest) {
	let body: LeadPayload;

	try {
		body = await request.json();
	} catch {
		return NextResponse.json(
			{ error: "Invalid request body" },
			{ status: 400 },
		);
	}

	const email = body.email?.trim().toLowerCase();
	const source = body.source?.trim() || "free-deploy";

	if (!email || !isValidEmail(email)) {
		return NextResponse.json(
			{ error: "Please enter a valid email address." },
			{ status: 400 },
		);
	}

	try {
		await sendMail({
			to: ADMIN_EMAIL,
			subject: `New free-deploy lead — ${email}`,
			text: [
				"New free deployment lead:",
				"",
				`Email: ${email}`,
				`Source: ${source}`,
				"",
				"— Sent from the Sagyboar free-deploy page",
			].join("\n"),
			replyTo: email,
		});
	} catch (error) {
		console.error("Lead API: failed to send email", error);
		return NextResponse.json(
			{ error: "We couldn't save your request right now. Please try again." },
			{ status: 502 },
		);
	}

	// Optional: also append to Google Sheet when webhook is configured
	const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
	if (webhookUrl && !webhookUrl.includes("YOUR_SCRIPT_ID")) {
		try {
			const webhookResponse = await fetch(webhookUrl, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ email, source }),
			});
			if (!webhookResponse.ok) {
				console.error(
					"Lead API: Google Sheet webhook responded with",
					webhookResponse.status,
				);
			}
		} catch (error) {
			console.error(
				"Lead API: failed to forward to Google Sheet webhook",
				error,
			);
		}
	}

	return NextResponse.json({ success: true }, { status: 200 });
}
