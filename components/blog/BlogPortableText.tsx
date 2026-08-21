import { urlForImage } from "@/lib/sanity/image";
import {
	PortableText,
	type PortableTextComponents,
	type PortableTextBlock,
} from "next-sanity";
import Image from "next/image";

const components: PortableTextComponents = {
	types: {
		image: ({ value }) => {
			if (!value?.asset) return null;
			const src = urlForImage(value).width(1200).url();
			return (
				<figure className="my-10 overflow-hidden rounded-2xl border border-sagy-border">
					<div className="relative aspect-[16/9] bg-sagy-heading/[0.04]">
						<Image
							src={src}
							alt={value.alt ?? ""}
							fill
							className="object-cover"
							sizes="(max-width: 768px) 100vw, 720px"
						/>
					</div>
					{value.caption && (
						<figcaption className="border-t border-sagy-border px-4 py-3 font-mono text-xs text-sagy-muted">
							{value.caption}
						</figcaption>
					)}
				</figure>
			);
		},
	},
	block: {
		h2: ({ children }) => (
			<h2 className="mb-4 mt-12 font-display text-3xl uppercase tracking-tight text-sagy-heading">
				{children}
			</h2>
		),
		h3: ({ children }) => (
			<h3 className="mb-3 mt-8 font-display text-2xl uppercase tracking-tight text-sagy-heading">
				{children}
			</h3>
		),
		normal: ({ children }) => (
			<p className="mb-5 font-sans text-base leading-relaxed text-sagy-body sm:text-lg">
				{children}
			</p>
		),
		blockquote: ({ children }) => (
			<blockquote className="my-8 border-l-2 border-sagy-accent/50 pl-5 font-sans text-lg italic leading-relaxed text-sagy-heading">
				{children}
			</blockquote>
		),
	},
	marks: {
		strong: ({ children }) => (
			<strong className="font-semibold text-sagy-heading">{children}</strong>
		),
		em: ({ children }) => <em>{children}</em>,
		code: ({ children }) => (
			<code className="rounded-md border border-sagy-border bg-sagy-heading/[0.06] px-1.5 py-0.5 font-mono text-[0.9em] text-sagy-accent">
				{children}
			</code>
		),
		link: ({ children, value }) => (
			<a
				href={value?.href}
				className="text-sagy-accent underline underline-offset-4 transition-colors hover:text-sagy-heading"
				target={value?.href?.startsWith("http") ? "_blank" : undefined}
				rel={value?.href?.startsWith("http") ? "noopener noreferrer" : undefined}
			>
				{children}
			</a>
		),
	},
	list: {
		bullet: ({ children }) => (
			<ul className="mb-5 list-disc space-y-2 pl-6 font-sans text-base text-sagy-body sm:text-lg">
				{children}
			</ul>
		),
		number: ({ children }) => (
			<ol className="mb-5 list-decimal space-y-2 pl-6 font-sans text-base text-sagy-body sm:text-lg">
				{children}
			</ol>
		),
	},
	listItem: {
		bullet: ({ children }) => <li className="leading-relaxed">{children}</li>,
		number: ({ children }) => <li className="leading-relaxed">{children}</li>,
	},
};

export function BlogPortableText({
	value,
}: {
	value: PortableTextBlock[];
}) {
	return <PortableText value={value} components={components} />;
}
