"use client";

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { ContactForm } from "./forms/ContactForm";

interface RequestDemoModalProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
}

export function RequestDemoModal({
	open,
	onOpenChange,
}: RequestDemoModalProps) {
	const handleSuccess = () => {
		setTimeout(() => {
			onOpenChange(false);
		}, 2500);
	};

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto">
				<DialogHeader>
					<DialogTitle>Request a demo</DialogTitle>
					<DialogDescription>
						See how Sagyboar handles deploy, monitor, and auto-heal for your
						stack. Share a few details and we&apos;ll schedule a walkthrough.
					</DialogDescription>
				</DialogHeader>
				<div className="mt-4">
					<ContactForm
						inquiryType="demo"
						defaultSubject="Request a demo"
						submitLabel="Request demo"
						successTitle="Demo request received"
						successDescription="Thanks! We've emailed you a confirmation and notified our team. We'll reach out shortly to schedule your demo."
						onSuccess={handleSuccess}
						onCancel={() => onOpenChange(false)}
						showCancelButton
					/>
				</div>
			</DialogContent>
		</Dialog>
	);
}
