import { createClient } from "next-sanity";
import {
	sanityApiVersion,
	sanityDataset,
	sanityProjectId,
	sanityReadToken,
} from "./env";

export const sanityClient = createClient({
	projectId: sanityProjectId || "placeholder",
	dataset: sanityDataset,
	apiVersion: sanityApiVersion,
	useCdn: true,
	token: sanityReadToken,
	perspective: "published",
});

/** Fresh reads when a token is present (e.g. private dataset). */
export const sanityClientNoCdn = createClient({
	projectId: sanityProjectId || "placeholder",
	dataset: sanityDataset,
	apiVersion: sanityApiVersion,
	useCdn: false,
	token: sanityReadToken,
	perspective: "published",
});
