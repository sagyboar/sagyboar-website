import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FeaturePage } from "@/components/features/FeaturePage";
import { featurePages, getFeatureBySlug } from "@/components/features/features-data";
import { buildFeatureMetadata } from "@/lib/seo";

type FeatureRouteProps = {
	params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
	return featurePages.map((feature) => ({ slug: feature.slug }));
}

export async function generateMetadata({
	params,
}: FeatureRouteProps): Promise<Metadata> {
	const { slug } = await params;
	const feature = getFeatureBySlug(slug);

	if (!feature) {
		return { title: "Feature not found" };
	}

	return buildFeatureMetadata(feature);
}

export default async function FeatureRoute({ params }: FeatureRouteProps) {
	const { slug } = await params;
	const feature = getFeatureBySlug(slug);

	if (!feature) {
		notFound();
	}

	return <FeaturePage feature={feature} />;
}
