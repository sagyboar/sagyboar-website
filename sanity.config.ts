import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import {
	sanityApiVersion,
	sanityDataset,
	sanityProjectId,
} from "./lib/sanity/env";
import { schemaTypes } from "./sanity/schemaTypes";

const projectId = sanityProjectId || "placeholder";
const dataset = sanityDataset;

export default defineConfig({
	name: "sagyboar",
	title: "Sagyboar Blog",
	projectId,
	dataset,
	basePath: "/studio",
	plugins: [structureTool(), visionTool({ defaultApiVersion: sanityApiVersion })],
	schema: {
		types: schemaTypes,
	},
});
