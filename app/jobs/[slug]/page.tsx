import { JobDetail } from "@/components/jobs/JobDetail";
import { getJobBySlug, jobPostings } from "@/components/jobs/jobs-data";
import { buildJobMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type JobPageProps = {
	params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
	return jobPostings.map((job) => ({ slug: job.id }));
}

export async function generateMetadata({
	params,
}: JobPageProps): Promise<Metadata> {
	const { slug } = await params;
	const job = getJobBySlug(slug);

	if (!job) {
		return { title: "Role not found" };
	}

	return buildJobMetadata(job);
}

export default async function JobPage({ params }: JobPageProps) {
	const { slug } = await params;
	const job = getJobBySlug(slug);

	if (!job) {
		notFound();
	}

	return <JobDetail job={job} />;
}
