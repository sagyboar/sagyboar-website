"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
	return (
		<div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-4 text-center">
			<p className="text-sm font-semibold uppercase tracking-wider text-primary">
				404
			</p>
			<h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
				Page not found
			</h1>
			<p className="max-w-md text-lg text-muted-foreground">
				Sorry, we couldn&apos;t find the page you&apos;re looking for.
			</p>
			<div className="flex flex-wrap items-center justify-center gap-4">
				<Button asChild size="lg" className="rounded-full">
					<Link href="/">Go home</Link>
				</Button>
				<Button asChild size="lg" variant="outline" className="rounded-full">
					<Link href="/contact">Contact support</Link>
				</Button>
			</div>
		</div>
	);
}
