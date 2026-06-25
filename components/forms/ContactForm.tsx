"use client";

import { useState } from "react";
import { trackGAEvent } from "@/components/analitycs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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
}: {
	onSuccess?: () => void;
	onCancel?: () => void;
	showCancelButton?: boolean;
}) {
	const [form, setForm] = useState<ContactFormState>(EMPTY);
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
				body: JSON.stringify(form),
			});
			if (!res.ok) {
				const data = await res.json().catch(() => ({}));
				throw new Error(data.error ?? "Something went wrong.");
			}
			trackGAEvent({
				action: "Contact Form Submitted",
				category: "Contact",
				label: form.subject || "general",
			});
			setForm(EMPTY);
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
					Message sent
				</h2>
				<p className="mt-3 text-muted-foreground">
					Thanks for reaching out! We&apos;ve emailed you a confirmation and our
					team will get back to you shortly.
				</p>
				<div className="mt-6 flex justify-center gap-3">
					<Button variant="outline" onClick={() => setSubmitted(false)}>
						Send another
					</Button>
					{onCancel && <Button onClick={onCancel}>Close</Button>}
				</div>
			</div>
		);
	}

	return (
		<form onSubmit={handleSubmit} className="space-y-5">
			<div className="grid gap-5 sm:grid-cols-2">
				<div className="space-y-2">
					<label htmlFor="name" className="block text-sm font-medium text-foreground">
						Name <span className="text-red-500">*</span>
					</label>
					<Input
						id="name"
						value={form.name}
						onChange={(e) => update("name", e.target.value)}
						placeholder="Your full name"
						errorMessage={errors.name}
					/>
				</div>
				<div className="space-y-2">
					<label htmlFor="email" className="block text-sm font-medium text-foreground">
						Email <span className="text-red-500">*</span>
					</label>
					<Input
						id="email"
						type="email"
						value={form.email}
						onChange={(e) => update("email", e.target.value)}
						placeholder="you@company.com"
						errorMessage={errors.email}
					/>
				</div>
			</div>

			<div className="grid gap-5 sm:grid-cols-2">
				<div className="space-y-2">
					<label htmlFor="company" className="block text-sm font-medium text-foreground">
						Company
					</label>
					<Input
						id="company"
						value={form.company}
						onChange={(e) => update("company", e.target.value)}
						placeholder="Company name (optional)"
					/>
				</div>
				<div className="space-y-2">
					<label htmlFor="subject" className="block text-sm font-medium text-foreground">
						Subject
					</label>
					<Input
						id="subject"
						value={form.subject}
						onChange={(e) => update("subject", e.target.value)}
						placeholder="What's this about? (optional)"
					/>
				</div>
			</div>

			<div className="space-y-2">
				<label htmlFor="message" className="block text-sm font-medium text-foreground">
					Message <span className="text-red-500">*</span>
				</label>
				<textarea
					id="message"
					value={form.message}
					onChange={(e) => update("message", e.target.value)}
					rows={6}
					placeholder="Tell us how we can help..."
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
					<Button type="button" variant="outline" onClick={onCancel} disabled={submitting}>
						Cancel
					</Button>
				)}
				<Button type="submit" disabled={submitting} className="min-w-[140px] rounded-full">
					{submitting ? "Sending..." : "Send message"}
				</Button>
			</div>
		</form>
	);
}
