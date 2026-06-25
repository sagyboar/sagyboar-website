import mongoose, { type InferSchemaType, Schema } from "mongoose";

const ContactSchema = new Schema(
	{
		name: { type: String, required: true, trim: true },
		email: { type: String, required: true, trim: true, lowercase: true },
		company: { type: String, trim: true, default: "" },
		subject: { type: String, trim: true, default: "" },
		message: { type: String, required: true, trim: true },
	},
	{ timestamps: true },
);

export type ContactDocument = InferSchemaType<typeof ContactSchema>;

export const Contact =
	mongoose.models.Contact ?? mongoose.model("Contact", ContactSchema);
