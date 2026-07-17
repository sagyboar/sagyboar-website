"use client";

import { trackGAEvent } from "@/components/analitycs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

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
			<div className="rounded-2xl border border-border bg-card/60 p-8 text-center">
				<h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">
					{successTitle}
				</h2>
				<p className="mt-3 text-muted-foreground">{successDescription}</p>
				<div className="mt-6 flex justify-center gap-3">
					<Button variant="outline" onClick={() => setSubmitted(false)}>
						Send another
					</Button>
					{onCancel && <Button onClick={onCancel}>Close</Button>}
				</div>
			</div>
		);
	}

	const isDemo = inquiryType === "demo";

	return (
		<form onSubmit={handleSubmit} className="space-y-5">
			<div className="grid gap-5 sm:grid-cols-2">
				<div className="space-y-2">
					<label
						htmlFor="name"
						className="block text-sm font-medium text-foreground"
					>
						Name <span className="text-red-500">*</span>
					</label>
					<Input
						id="name"
						value={form.name}
						onChange={(e) => update("name", e.target.value)}
						placeholder="Your full name"
						autoComplete="name"
						errorMessage={errors.name}
					/>
				</div>
				<div className="space-y-2">
					<label
						htmlFor="email"
						className="block text-sm font-medium text-foreground"
					>
						{isDemo ? "Work email" : "Email"}{" "}
						<span className="text-red-500">*</span>
					</label>
					<Input
						id="email"
						type="email"
						value={form.email}
						onChange={(e) => update("email", e.target.value)}
						placeholder="you@company.com"
						autoComplete="email"
						errorMessage={errors.email}
					/>
				</div>
			</div>

			<div className="grid gap-5 sm:grid-cols-2">
				<div className="space-y-2">
					<label
						htmlFor="company"
						className="block text-sm font-medium text-foreground"
					>
						Company
					</label>
					<Input
						id="company"
						value={form.company}
						onChange={(e) => update("company", e.target.value)}
						placeholder="Company name (optional)"
						autoComplete="organization"
					/>
				</div>
				{!isDemo ? (
					<div className="space-y-2">
						<label
							htmlFor="subject"
							className="block text-sm font-medium text-foreground"
						>
							Subject
						</label>
						<Input
							id="subject"
							value={form.subject}
							onChange={(e) => update("subject", e.target.value)}
							placeholder="What's this about? (optional)"
						/>
					</div>
				) : (
					<div className="space-y-2">
						<label
							htmlFor="demo-subject"
							className="block text-sm font-medium text-foreground"
						>
							Subject
						</label>
						<Input
							id="demo-subject"
							value={form.subject || defaultSubject}
							readOnly
							className="opacity-80"
						/>
					</div>
				)}
			</div>

			<div className="space-y-2">
				<label
					htmlFor="message"
					className="block text-sm font-medium text-foreground"
				>
					{isDemo ? "What would you like to see?" : "Message"}{" "}
					<span className="text-red-500">*</span>
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
					className="flex w-full resize-none rounded-md bg-input px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
				/>
				{errors.message && (
					<span className="text-sm text-red-600">{errors.message}</span>
				)}
			</div>

			{serverError && (
				<p className="rounded-lg border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm text-red-600 dark:text-red-300">
					{serverError}
				</p>
			)}

			<div className="flex justify-end gap-3">
				{showCancelButton && onCancel && (
					<Button
						type="button"
						variant="outline"
						onClick={onCancel}
						disabled={submitting}
					>
						Cancel
					</Button>
				)}
				<Button
					type="submit"
					disabled={submitting}
					className="min-w-[140px] rounded-full"
				>
					{submitting ? "Sending..." : submitLabel}
				</Button>
			</div>
		</form>
	);
}
