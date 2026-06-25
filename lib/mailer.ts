import nodemailer from "nodemailer";

export const ADMIN_EMAIL = process.env.ADMIN_EMAIL ?? "637golusingh@gmail.com";

type Attachment = {
	filename: string;
	content: Buffer;
	contentType?: string;
};

type SendMailArgs = {
	to: string | string[];
	subject: string;
	text?: string;
	html?: string;
	replyTo?: string;
	attachments?: Attachment[];
};

let transporter: nodemailer.Transporter | null = null;

function getTransporter(): nodemailer.Transporter {
	if (transporter) return transporter;

	const host = process.env.SMTP_HOST ?? "smtp.gmail.com";
	const port = Number(process.env.SMTP_PORT ?? 465);
	const user = process.env.SMTP_USER;
	const pass = process.env.SMTP_PASS;

	if (!user || !pass) {
		throw new Error(
			"SMTP_USER and SMTP_PASS are not set. Configure SMTP credentials to enable email.",
		);
	}

	transporter = nodemailer.createTransport({
		host,
		port,
		secure: port === 465,
		auth: { user, pass },
	});

	return transporter;
}

export async function sendMail({
	to,
	subject,
	text,
	html,
	replyTo,
	attachments,
}: SendMailArgs): Promise<void> {
	const from =
		process.env.SMTP_FROM ??
		`Sagyboar <${process.env.SMTP_USER ?? ADMIN_EMAIL}>`;

	await getTransporter().sendMail({
		from,
		to,
		subject,
		text,
		html,
		replyTo,
		attachments,
	});
}
