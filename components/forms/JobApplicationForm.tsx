"use client";

import { trackGAEvent } from "@/components/analitycs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { FileText, UploadCloud, X } from "lucide-react";
import { useRef, useState } from "react";

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
			<div className="rounded-2xl border border-border bg-card/60 p-8 text-center">
				<h3 className="font-display text-2xl font-semibold tracking-tight text-foreground">
					Application submitted
				</h3>
				<p className="mt-3 text-muted-foreground">
					Thanks for applying for the {jobTitle} role! We&apos;ve emailed you a
					confirmation and our team will be in touch if there&apos;s a fit.
				</p>
				<div className="mt-6 flex justify-center">
					<Button variant="outline" onClick={() => setSubmitted(false)}>
						Submit another application
					</Button>
				</div>
			</div>
		);
	}

	return (
		<form onSubmit={handleSubmit} className="space-y-5">
			<div className="grid gap-5 sm:grid-cols-2">
				<div className="space-y-2">
					<label
						htmlFor="fullName"
						className="block text-sm font-medium text-foreground"
					>
						Full name <span className="text-red-500">*</span>
					</label>
					<Input
						id="fullName"
						value={form.fullName}
						onChange={(e) => update("fullName", e.target.value)}
						placeholder="Your full name"
						errorMessage={errors.fullName}
					/>
				</div>
				<div className="space-y-2">
					<label
						htmlFor="appEmail"
						className="block text-sm font-medium text-foreground"
					>
						Email <span className="text-red-500">*</span>
					</label>
					<Input
						id="appEmail"
						type="email"
						value={form.email}
						onChange={(e) => update("email", e.target.value)}
						placeholder="you@email.com"
						errorMessage={errors.email}
					/>
				</div>
			</div>

			<div className="grid gap-5 sm:grid-cols-2">
				<div className="space-y-2">
					<label
						htmlFor="phone"
						className="block text-sm font-medium text-foreground"
					>
						Contact number <span className="text-red-500">*</span>
					</label>
					<Input
						id="phone"
						value={form.phone}
						onChange={(e) => update("phone", e.target.value)}
						placeholder="+1 555 000 0000"
						errorMessage={errors.phone}
					/>
				</div>
				<div className="space-y-2">
					<label
						htmlFor="location"
						className="block text-sm font-medium text-foreground"
					>
						Current location
					</label>
					<Input
						id="location"
						value={form.location}
						onChange={(e) => update("location", e.target.value)}
						placeholder="City, Country (optional)"
					/>
				</div>
			</div>

			<div className="grid gap-5 sm:grid-cols-2">
				<div className="space-y-2">
					<label
						htmlFor="linkedin"
						className="block text-sm font-medium text-foreground"
					>
						LinkedIn profile
					</label>
					<Input
						id="linkedin"
						value={form.linkedin}
						onChange={(e) => update("linkedin", e.target.value)}
						placeholder="https://linkedin.com/in/... (optional)"
					/>
				</div>
				<div className="space-y-2">
					<label
						htmlFor="experience"
						className="block text-sm font-medium text-foreground"
					>
						Relevant experience
					</label>
					<Input
						id="experience"
						value={form.experience}
						onChange={(e) => update("experience", e.target.value)}
						placeholder="e.g. 3 years in B2B sales (optional)"
					/>
				</div>
			</div>

			<div className="space-y-2">
				<label
					htmlFor="coverNote"
					className="block text-sm font-medium text-foreground"
				>
					Cover note
				</label>
				<textarea
					id="coverNote"
					value={form.coverNote}
					onChange={(e) => update("coverNote", e.target.value)}
					rows={4}
					placeholder="Tell us why you're a great fit (optional)"
					className="flex w-full resize-none rounded-md bg-input px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
				/>
			</div>

			<div className="space-y-2">
				<span className="block text-sm font-medium text-foreground">
					Resume / CV <span className="text-red-500">*</span>
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
					<div className="flex items-center gap-3 rounded-xl border border-border bg-card/50 p-3">
						<div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
							<FileText className="size-5" />
						</div>
						<div className="min-w-0 flex-1">
							<p className="truncate text-sm font-medium text-foreground">
								{resume.name}
							</p>
							<p className="text-xs text-muted-foreground">
								{formatBytes(resume.size)}
							</p>
						</div>
						<button
							type="button"
							onClick={() => fileRef.current?.click()}
							className="rounded-full px-3 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-accent"
						>
							Replace
						</button>
						<button
							type="button"
							onClick={clearFile}
							aria-label="Remove file"
							className="flex size-8 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
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
							"flex w-full flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed px-6 py-8 text-center transition-colors",
							dragActive
								? "border-primary bg-primary/5"
								: "border-border bg-input/40 hover:border-primary/50 hover:bg-accent/40",
						)}
					>
						<div className="flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary">
							<UploadCloud className="size-5" />
						</div>
						<span className="text-sm font-medium text-foreground">
							<span className="text-primary">Click to upload</span> or drag and
							drop
						</span>
						<span className="text-xs text-muted-foreground">
							PDF, Word, or image — up to 5 MB
						</span>
					</button>
				)}

				{errors.resume && (
					<span className="block text-sm text-red-600">{errors.resume}</span>
				)}
			</div>

			{serverError && (
				<p className="rounded-lg border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm text-red-600 dark:text-red-300">
					{serverError}
				</p>
			)}

			<Button
				type="submit"
				disabled={submitting}
				className="w-full rounded-full sm:w-auto"
			>
				{submitting ? "Submitting..." : "Submit application"}
			</Button>
		</form>
	);
}
