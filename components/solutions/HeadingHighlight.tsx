type HeadingHighlightProps = {
	text: string;
	highlight?: string;
};

const blueClass = "border-b-2 border-blue-400 text-blue-400";

export function HeadingHighlight({ text, highlight }: HeadingHighlightProps) {
	if (highlight && text.endsWith(highlight)) {
		const before = text.slice(0, text.length - highlight.length);
		return (
			<>
				{before}
				<span className={blueClass}>{highlight}</span>
			</>
		);
	}

	const words = text.trim().split(" ");
	const last = words.pop() ?? text;
	const before = words.join(" ");

	return (
		<>
			{before ? `${before} ` : ""}
			<span className={blueClass}>{last}</span>
		</>
	);
}
