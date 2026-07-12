"use client";

import { useEffect } from "react";

export default function GlobalError({
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
		<html lang="en">
			<body>
				<div
					style={{
						display: "flex",
						minHeight: "100vh",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						gap: "1.5rem",
						padding: "1rem",
						textAlign: "center",
						fontFamily: "system-ui, sans-serif",
					}}
				>
					<p
						style={{
							fontSize: "0.875rem",
							fontWeight: 600,
							textTransform: "uppercase",
							letterSpacing: "0.1em",
							color: "#ef4444",
						}}
					>
						Critical error
					</p>
					<h2
						style={{
							fontSize: "2rem",
							fontWeight: 600,
							color: "inherit",
							margin: 0,
						}}
					>
						Something went wrong
					</h2>
					<p style={{ maxWidth: "28rem", color: "#6b7280", margin: 0 }}>
						The application encountered a critical error. Please refresh the
						page.
					</p>
					<button
						type="button"
						onClick={reset}
						style={{
							padding: "0.75rem 1.5rem",
							borderRadius: "9999px",
							background: "#5227FF",
							color: "#fff",
							border: "none",
							cursor: "pointer",
							fontSize: "1rem",
							fontWeight: 500,
						}}
					>
						Try again
					</button>
				</div>
			</body>
		</html>
	);
}
