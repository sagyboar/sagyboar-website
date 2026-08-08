"use client";

import {
	fieldErrorClass,
	fieldInputClass,
	fieldInputErrorClass,
} from "@/components/forms/form-styles";
import { GlowButton } from "@/components/ui/sagy";
import {
	FREE_DEPLOY_DASHBOARD_URL,
	FREE_DEPLOY_LEAD_SOURCE,
} from "@/constants/free-deploy";
import { cn } from "@/lib/utils";
import { isValidEmail } from "@/lib/validate-email";
import { Loader2 } from "lucide-react";
import { type FormEvent, useState } from "react";

type SubmitStatus = "idle" | "loading" | "success" | "error";

type FreeDeployLeadFormProps = {
	formId: string;
	source?: string;
	showTrustLine?: boolean;
	align?: "center" | "left";
	className?: string;
};

export function FreeDeployLeadForm({
	formId,
	source = FREE_DEPLOY_LEAD_SOURCE,
	showTrustLine = false,
	align = "center",
	className,
}: FreeDeployLeadFormProps) {
	const [email, setEmail] = useState("");
	const [fieldError, setFieldError] = useState<string | null>(null);
	const [status, setStatus] = useState<SubmitStatus>("idle");
	const inputId = `${formId}-email`;
	const errorId = `${inputId}-error`;
	const isLoading = status === "loading";

	const validate = (): boolean => {
		const trimmed = email.trim();
		if (!trimmed) {
			setFieldError("Email is required");
			return false;
		}
		if (!isValidEmail(trimmed)) {
			setFieldError("Enter a valid email address");
			return false;
		}
		setFieldError(null);
		return true;
	};

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (isLoading) return;
		if (!validate()) return;

		setStatus("loading");
		try {
			const response = await fetch("/api/lead", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ email: email.trim(), source }),
			});
			if (!response.ok) throw new Error("Request failed");
			setStatus("success");
		} catch {
			setStatus("error");
		}
	};

	if (status === "success") {
		return (
			<div
				className={cn(
					"flex flex-col gap-4",
					align === "center" ? "items-center" : "items-center lg:items-start",
					className,
				)}
				role="status"
			>
				<p className="font-sans text-sm text-sagy-success">
					You&apos;re in! We&apos;ll reach out shortly.
				</p>
				<GlowButton
					href={FREE_DEPLOY_DASHBOARD_URL}
					external
					className="!rounded-full"
				>
					Go to dashboard
				</GlowButton>
			</div>
		);
	}

	return (
		<div className={cn("w-full", className)}>
			<form
				id={formId}
				onSubmit={handleSubmit}
				className={cn(
					"flex w-full max-w-xl flex-col gap-3 sm:flex-row sm:items-start",
					align === "center" ? "sm:mx-auto" : "mx-auto lg:mx-0",
				)}
				noValidate
			>
				<div className="min-w-0 flex-1">
					<label htmlFor={inputId} className="sr-only">
						Email address
					</label>
					<input
						id={inputId}
						name="email"
						type="email"
						inputMode="email"
						value={email}
						onChange={(event) => {
							setEmail(event.target.value);
							if (fieldError) setFieldError(null);
							if (status === "error") setStatus("idle");
						}}
						placeholder="you@company.com"
						autoComplete="email"
						disabled={isLoading}
						required
						aria-invalid={Boolean(fieldError)}
						aria-describedby={fieldError ? errorId : undefined}
						className={cn(fieldInputClass, fieldError && fieldInputErrorClass)}
					/>
					{fieldError && (
						<span id={errorId} className={cn(fieldErrorClass, "mt-1.5 block")}>
							{fieldError}
						</span>
					)}
				</div>

				<GlowButton
					type="submit"
					disabled={isLoading}
					className="shrink-0 !rounded-full !px-6"
					aria-busy={isLoading}
				>
					{isLoading ? (
						<>
							<Loader2 className="size-4 animate-spin" aria-hidden="true" />
							<span>Sending…</span>
						</>
					) : (
						"Claim your slot"
					)}
				</GlowButton>
			</form>

			{showTrustLine && (
				<p
					className={cn(
						"mt-3 font-sans text-sm text-sagy-muted",
						align === "left" && "text-center lg:text-left",
					)}
				>
					No credit card required to start.
				</p>
			)}

			<div aria-live="polite" aria-atomic="true" className="sr-only">
				{isLoading && "Submitting your email."}
				{status === "error" && "Something went wrong, try again."}
			</div>

			{status === "error" && (
				<p className="mt-3 font-sans text-sm text-sagy-error" role="alert">
					Something went wrong, try again.
				</p>
			)}
		</div>
	);
}
