import Image from "next/image";
import { Sagyboar_LOGO_SRC } from "@/constants/branding";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
	return (
		<>
			<Image
			src={Sagyboar_LOGO_SRC}
			alt="Sagyboar"
			width={160}
			height={160}
			className={cn("h-10 w-auto object-contain", className)}
			priority
		/>
		</>
	);
}