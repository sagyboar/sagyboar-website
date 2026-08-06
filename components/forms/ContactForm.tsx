"use client";

import { trackGAEvent } from "@/components/analitycs";
import { GlowButton } from "@/components/ui/sagy";
import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";
import {
	fieldErrorClass,
	fieldInputClass,
	fieldInputErrorClass,
	fieldLabelClass,
	requiredMarkClass,
} from "./form-styles";

type ContactFormState = {
	name: string;
	email: string;
	company: string;
	subject: string;
	message: string;
};

const EMPTY: ContactFormState = {
	name: "",
	email: "",
	company: "",
	subject: "",
	message: "",
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm({
	onSuccess,
	onCancel,
	showCancelButton = false,
	defaultSubject = "",
	inquiryType,
	submitLabel = "Send message",
	successTitle = "Message sent",
	successDescription = "Thanks for reaching out! We've emailed you a confirmation and our team will get back to you shortly.",
}: {
	onSuccess?: () => void;
	onCancel?: () => void;
	showCancelButton?: boolean;
	defaultSubject?: string;
	inquiryType?: "demo" | "support" | "sales" | "other";
	submitLabel?: string;
	successTitle?: string;
	successDescription?: string;
}) {
	const [form, setForm] = useState<ContactFormState>({
		...EMPTY,
		subject: defaultSubject,
	});
	const [errors, setErrors] = useState<Record<string, string>>({});
	const [submitting, setSubmitting] = useState(false);
	const [submitted, setSubmitted] = useState(false);
	const [serverError, setServerError] = useState<string | null>(null);

	const update = (field: keyof ContactFormState, value: string) => {
		setForm((prev) => ({ ...prev, [field]: value }));
		setErrors((prev) => {
			if (!prev[field]) return prev;
			const next = { ...prev };
			delete next[field];
			return next;
		});
	};

	const validate = (): boolean => {
		const next: Record<string, string> = {};
		if (!form.name.trim()) next.name = "Name is required";
		if (!form.email.trim()) next.email = "Email is required";
		else if (!EMAIL_REGEX.test(form.email))
			next.email = "Enter a valid email address";
		if (!form.message.trim()) next.message = "Message is required";
		setErrors(next);
		return Object.keys(next).length === 0;
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setServerError(null);
		if (!validate()) return;

		setSubmitting(true);
		try {
			const res = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					name: form.name.trim(),
					email: form.email.trim(),
					company: form.company.trim(),
					subject: form.subject.trim() || defaultSubject,
					message: form.message.trim(),
					...(inquiryType ? { inquiryType } : {}),
				}),
			});
			if (!res.ok) {
				const data = await res.json().catch(() => ({}));
				throw new Error(data.error ?? "Something went wrong.");
			}
			trackGAEvent({
				action:
					inquiryType === "demo"
						? "Demo Request Submitted"
						: "Contact Form Submitted",
				category: inquiryType === "demo" ? "Demo" : "Contact",
				label: form.subject || defaultSubject || "general",
			});
			setForm({ ...EMPTY, subject: defaultSubject });
			setSubmitted(true);
			onSuccess?.();
		} catch (err) {
			setServerError(
				err instanceof Error ? err.message : "Something went wrong.",
			);
		} finally {
			setSubmitting(false);
		}
	};

	if (submitted) {
		return (
			<div className="rounded-xl border border-sagy-success/25 bg-sagy-success/[0.06] p-8 text-center">
				<span className="mx-auto flex size-11 items-center justify-center rounded-full border border-sagy-success/30 bg-sagy-success/10">
					<CheckCircle2
						className="size-5 text-sagy-success"
						strokeWidth={1.75}
						aria-hidden="true"
					/>
				</span>
				<h2 className="mt-4 font-display text-xl uppercase tracking-tight text-sagy-heading">
					{successTitle}
				</h2>
				<p className="mt-3 font-sans text-sm leading-relaxed text-sagy-body">
					{successDescription}
				</p>
				<div className="mt-6 flex justify-center gap-3">
					<GlowButton variant="ghost" onClick={() => setSubmitted(false)}>
						Send another
					</GlowButton>
					{onCancel && <GlowButton onClick={onCancel}>Close</GlowButton>}
				</div>
			</div>
		);
	}

	const isDemo = inquiryType === "demo";

	return (
		<form onSubmit={handleSubmit} className="space-y-5">
			<div className="grid gap-5 sm:grid-cols-2">
				<div className="space-y-2">
					<label htmlFor="name" className={fieldLabelClass}>
						Name <span className={requiredMarkClass}>*</span>
					</label>
					<input
						id="name"
						value={form.name}
						onChange={(e) => update("name", e.target.value)}
						placeholder="Your full name"
						autoComplete="name"
						aria-invalid={Boolean(errors.name)}
						className={cn(fieldInputClass, errors.name && fieldInputErrorClass)}
					/>
					{errors.name && (
						<span className={fieldErrorClass}>{errors.name}</span>
					)}
				</div>
				<div className="space-y-2">
					<label htmlFor="email" className={fieldLabelClass}>
						{isDemo ? "Work email" : "Email"}{" "}
						<span className={requiredMarkClass}>*</span>
					</label>
					<input
						id="email"
						type="email"
						value={form.email}
						onChange={(e) => update("email", e.target.value)}
						placeholder="you@company.com"
						autoComplete="email"
						aria-invalid={Boolean(errors.email)}
						className={cn(
							fieldInputClass,
							errors.email && fieldInputErrorClass,
						)}
					/>
					{errors.email && (
						<span className={fieldErrorClass}>{errors.email}</span>
					)}
				</div>
			</div>

			<div className="grid gap-5 sm:grid-cols-2">
				<div className="space-y-2">
					<label htmlFor="company" className={fieldLabelClass}>
						Company
					</label>
					<input
						id="company"
						value={form.company}
						onChange={(e) => update("company", e.target.value)}
						placeholder="Company name (optional)"
						autoComplete="organization"
						className={fieldInputClass}
					/>
				</div>
				{!isDemo ? (
					<div className="space-y-2">
						<label htmlFor="subject" className={fieldLabelClass}>
							Subject
						</label>
						<input
							id="subject"
							value={form.subject}
							onChange={(e) => update("subject", e.target.value)}
							placeholder="What's this about? (optional)"
							className={fieldInputClass}
						/>
					</div>
				) : (
					<div className="space-y-2">
						<label htmlFor="demo-subject" className={fieldLabelClass}>
							Subject
						</label>
						<input
							id="demo-subject"
							value={form.subject || defaultSubject}
							readOnly
							className={cn(fieldInputClass, "text-sagy-body")}
						/>
					</div>
				)}
			</div>

			<div className="space-y-2">
				<label htmlFor="message" className={fieldLabelClass}>
					{isDemo ? "What would you like to see?" : "Message"}{" "}
					<span className={requiredMarkClass}>*</span>
				</label>
				<textarea
					id="message"
					value={form.message}
					onChange={(e) => update("message", e.target.value)}
					rows={isDemo ? 5 : 6}
					placeholder={
						isDemo
							? "Tell us about your stack, goals, or any questions for the demo..."
							: "Tell us how we can help..."
					}
					aria-invalid={Boolean(errors.message)}
					className={cn(
						fieldInputClass,
						"resize-none",
						errors.message && fieldInputErrorClass,
					)}
				/>
				{errors.message && (
					<span className={fieldErrorClass}>{errors.message}</span>
				)}
			</div>

			{serverError && (
				<p className="rounded-xl border border-sagy-error/40 bg-sagy-error/10 px-4 py-3 font-sans text-sm text-sagy-error">
					{serverError}
				</p>
			)}

			<div className="flex flex-wrap justify-end gap-3">
				{showCancelButton && onCancel && (
					<GlowButton variant="ghost" onClick={onCancel} disabled={submitting}>
						Cancel
					</GlowButton>
				)}
				<GlowButton type="submit" disabled={submitting}>
					{submitting ? "Sending..." : submitLabel}
				</GlowButton>
			</div>
		</form>
	);
}
