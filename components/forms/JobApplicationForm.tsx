"use client";

import { trackGAEvent } from "@/components/analitycs";
import { GlowButton } from "@/components/ui/sagy";
import { cn } from "@/lib/utils";
import { CheckCircle2, FileText, UploadCloud, X } from "lucide-react";
import { useRef, useState } from "react";
import {
	fieldErrorClass,
	fieldInputClass,
	fieldInputErrorClass,
	fieldLabelClass,
	requiredMarkClass,
} from "./form-styles";

function formatBytes(bytes: number): string {
	if (bytes < 1024) return `${bytes} B`;
	if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
	return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

type JobApplicationFormState = {
	fullName: string;
	email: string;
	phone: string;
	location: string;
	linkedin: string;
	experience: string;
	coverNote: string;
};

const EMPTY: JobApplicationFormState = {
	fullName: "",
	email: "",
	phone: "",
	location: "",
	linkedin: "",
	experience: "",
	coverNote: "",
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_FILE_BYTES = 5 * 1024 * 1024;

export function JobApplicationForm({
	jobId,
	jobTitle,
}: {
	jobId: string;
	jobTitle: string;
}) {
	const [form, setForm] = useState<JobApplicationFormState>(EMPTY);
	const [resume, setResume] = useState<File | null>(null);
	const [errors, setErrors] = useState<Record<string, string>>({});
	const [submitting, setSubmitting] = useState(false);
	const [submitted, setSubmitted] = useState(false);
	const [serverError, setServerError] = useState<string | null>(null);
	const [dragActive, setDragActive] = useState(false);
	const fileRef = useRef<HTMLInputElement>(null);

	const selectFile = (file: File | null) => {
		setResume(file);
		setErrors((prev) => {
			if (!prev.resume) return prev;
			const { resume: _removed, ...next } = prev;
			return next;
		});
	};

	const clearFile = () => {
		setResume(null);
		if (fileRef.current) fileRef.current.value = "";
	};

	const update = (field: keyof JobApplicationFormState, value: string) => {
		setForm((prev) => ({ ...prev, [field]: value }));
		setErrors((prev) => {
			if (!prev[field]) return prev;
			const { [field]: _removed, ...next } = prev;
			return next;
		});
	};

	const validate = (): boolean => {
		const next: Record<string, string> = {};
		if (!form.fullName.trim()) next.fullName = "Full name is required";
		if (!form.email.trim()) next.email = "Email is required";
		else if (!EMAIL_REGEX.test(form.email))
			next.email = "Enter a valid email address";
		if (!form.phone.trim()) next.phone = "Contact number is required";
		if (!resume) next.resume = "Please attach your resume";
		else if (resume.size > MAX_FILE_BYTES)
			next.resume = "Resume must be 5 MB or smaller";
		setErrors(next);
		return Object.keys(next).length === 0;
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setServerError(null);
		if (!validate()) return;

		setSubmitting(true);
		try {
			const data = new FormData();
			data.append("jobId", jobId);
			data.append("jobTitle", jobTitle);
			for (const [key, value] of Object.entries(form)) {
				data.append(key, value);
			}
			if (resume) data.append("resume", resume);

			const res = await fetch("/api/job-application", {
				method: "POST",
				body: data,
			});
			if (!res.ok) {
				const payload = await res.json().catch(() => ({}));
				throw new Error(payload.error ?? "Something went wrong.");
			}
			trackGAEvent({
				action: "Job Application Submitted",
				category: "Careers",
				label: jobId,
			});
			setForm(EMPTY);
			setResume(null);
			if (fileRef.current) fileRef.current.value = "";
			setSubmitted(true);
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
				<h3 className="mt-4 font-display text-xl uppercase tracking-tight text-white">
					Application submitted
				</h3>
				<p className="mt-3 font-sans text-sm leading-relaxed text-sagy-body">
					Thanks for applying for the {jobTitle} role. We&apos;ve emailed you a
					confirmation and our team will be in touch if there&apos;s a fit.
				</p>
				<div className="mt-6 flex justify-center">
					<GlowButton variant="ghost" onClick={() => setSubmitted(false)}>
						Submit another application
					</GlowButton>
				</div>
			</div>
		);
	}

	return (
		<form onSubmit={handleSubmit} className="space-y-5">
			<div className="grid gap-5 sm:grid-cols-2">
				<div className="space-y-2">
					<label htmlFor="fullName" className={fieldLabelClass}>
						Full name <span className={requiredMarkClass}>*</span>
					</label>
					<input
						id="fullName"
						value={form.fullName}
						onChange={(e) => update("fullName", e.target.value)}
						placeholder="Your full name"
						aria-invalid={Boolean(errors.fullName)}
						className={cn(
							fieldInputClass,
							errors.fullName && fieldInputErrorClass,
						)}
					/>
					{errors.fullName && (
						<span className={fieldErrorClass}>{errors.fullName}</span>
					)}
				</div>
				<div className="space-y-2">
					<label htmlFor="appEmail" className={fieldLabelClass}>
						Email <span className={requiredMarkClass}>*</span>
					</label>
					<input
						id="appEmail"
						type="email"
						value={form.email}
						onChange={(e) => update("email", e.target.value)}
						placeholder="you@email.com"
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
					<label htmlFor="phone" className={fieldLabelClass}>
						Contact number <span className={requiredMarkClass}>*</span>
					</label>
					<input
						id="phone"
						value={form.phone}
						onChange={(e) => update("phone", e.target.value)}
						placeholder="+1 555 000 0000"
						aria-invalid={Boolean(errors.phone)}
						className={cn(
							fieldInputClass,
							errors.phone && fieldInputErrorClass,
						)}
					/>
					{errors.phone && (
						<span className={fieldErrorClass}>{errors.phone}</span>
					)}
				</div>
				<div className="space-y-2">
					<label htmlFor="location" className={fieldLabelClass}>
						Current location
					</label>
					<input
						id="location"
						value={form.location}
						onChange={(e) => update("location", e.target.value)}
						placeholder="City, Country (optional)"
						className={fieldInputClass}
					/>
				</div>
			</div>

			<div className="grid gap-5 sm:grid-cols-2">
				<div className="space-y-2">
					<label htmlFor="linkedin" className={fieldLabelClass}>
						LinkedIn profile
					</label>
					<input
						id="linkedin"
						value={form.linkedin}
						onChange={(e) => update("linkedin", e.target.value)}
						placeholder="https://linkedin.com/in/... (optional)"
						className={fieldInputClass}
					/>
				</div>
				<div className="space-y-2">
					<label htmlFor="experience" className={fieldLabelClass}>
						Relevant experience
					</label>
					<input
						id="experience"
						value={form.experience}
						onChange={(e) => update("experience", e.target.value)}
						placeholder="e.g. 3 years in B2B sales (optional)"
						className={fieldInputClass}
					/>
				</div>
			</div>

			<div className="space-y-2">
				<label htmlFor="coverNote" className={fieldLabelClass}>
					Cover note
				</label>
				<textarea
					id="coverNote"
					value={form.coverNote}
					onChange={(e) => update("coverNote", e.target.value)}
					rows={4}
					placeholder="Tell us why you're a great fit (optional)"
					className={cn(fieldInputClass, "resize-none")}
				/>
			</div>

			<div className="space-y-2">
				<span className={fieldLabelClass}>
					Resume / CV <span className={requiredMarkClass}>*</span>
				</span>
				<input
					ref={fileRef}
					id="resume"
					type="file"
					accept=".pdf,.doc,.docx,image/png,image/jpeg,image/webp"
					className="sr-only"
					onChange={(e) => selectFile(e.target.files?.[0] ?? null)}
				/>

				{resume ? (
					<div className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.04] p-3">
						<div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-sagy-accent/25 bg-sagy-accent/10 text-sagy-accent">
							<FileText className="size-5" strokeWidth={1.75} />
						</div>
						<div className="min-w-0 flex-1">
							<p className="truncate font-sans text-sm text-white">
								{resume.name}
							</p>
							<p className="font-mono text-[11px] text-sagy-muted">
								{formatBytes(resume.size)}
							</p>
						</div>
						<button
							type="button"
							onClick={() => fileRef.current?.click()}
							className="rounded-full px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-sagy-accent transition-colors hover:bg-white/[0.06]"
						>
							Replace
						</button>
						<button
							type="button"
							onClick={clearFile}
							aria-label="Remove file"
							className="flex size-8 shrink-0 items-center justify-center rounded-full text-sagy-muted transition-colors hover:bg-white/[0.06] hover:text-white"
						>
							<X className="size-4" />
						</button>
					</div>
				) : (
					<button
						type="button"
						onClick={() => fileRef.current?.click()}
						onDragOver={(e) => {
							e.preventDefault();
							setDragActive(true);
						}}
						onDragLeave={(e) => {
							e.preventDefault();
							setDragActive(false);
						}}
						onDrop={(e) => {
							e.preventDefault();
							setDragActive(false);
							const file = e.dataTransfer.files?.[0];
							if (file) selectFile(file);
						}}
						className={cn(
							"flex w-full flex-col items-center justify-center gap-2 rounded-xl border border-dashed px-6 py-8 text-center transition-colors",
							dragActive
								? "border-sagy-accent/60 bg-sagy-accent/[0.08]"
								: "border-white/[0.12] bg-white/[0.02] hover:border-sagy-accent/40 hover:bg-white/[0.04]",
						)}
					>
						<div className="flex size-11 items-center justify-center rounded-full border border-sagy-accent/25 bg-sagy-accent/10 text-sagy-accent">
							<UploadCloud className="size-5" strokeWidth={1.75} />
						</div>
						<span className="font-sans text-sm text-white">
							<span className="text-sagy-accent">Click to upload</span> or drag
							and drop
						</span>
						<span className="font-mono text-[10px] uppercase tracking-wider text-sagy-muted">
							PDF, Word, or image — up to 5 MB
						</span>
					</button>
				)}

				{errors.resume && (
					<span className={fieldErrorClass}>{errors.resume}</span>
				)}
			</div>

			{serverError && (
				<p className="rounded-xl border border-sagy-error/40 bg-sagy-error/10 px-4 py-3 font-sans text-sm text-sagy-error">
					{serverError}
				</p>
			)}

			<GlowButton
				type="submit"
				disabled={submitting}
				className="w-full sm:w-auto"
			>
				{submitting ? "Submitting..." : "Submit application"}
			</GlowButton>
		</form>
	);
}
