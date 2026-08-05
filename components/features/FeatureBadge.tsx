"use client";

import { Badge } from "@/components/design-system/Badge";
import type { FeatureBadge as FeatureBadgeType } from "./features-data";

export function FeatureBadge({ badge }: { badge: FeatureBadgeType }) {
	return <Badge variant={badge} />;
}
