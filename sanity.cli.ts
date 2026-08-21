import { defineCliConfig } from "sanity/cli";
import { sanityDataset, sanityProjectId } from "./lib/sanity/env";

export default defineCliConfig({
	api: {
		projectId: sanityProjectId || "placeholder",
		dataset: sanityDataset,
	},
});
