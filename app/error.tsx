"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-4 text-center">
			<p className="text-sm font-semibold uppercase tracking-wider text-destructive">
				Something went wrong
			</p>
			<h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
				An unexpected error occurred
			</h2>
			<p className="max-w-md text-lg text-muted-foreground">
				We&apos;re sorry for the inconvenience. Please try again or contact
				support if the problem persists.
			</p>
			<div className="flex flex-wrap items-center justify-center gap-4">
				<Button size="lg" className="rounded-full" onClick={reset}>
					Try again
				</Button>
				<Button asChild size="lg" variant="outline" className="rounded-full">
					<Link href="/">Go home</Link>
				</Button>
			</div>
		</div>
	);
}
