import mongoose, { type InferSchemaType, Schema } from "mongoose";

const JobApplicationSchema = new Schema(
	{
		jobId: { type: String, required: true, trim: true },
		jobTitle: { type: String, required: true, trim: true },
		fullName: { type: String, required: true, trim: true },
		email: { type: String, required: true, trim: true, lowercase: true },
		phone: { type: String, required: true, trim: true },
		location: { type: String, trim: true, default: "" },
		linkedin: { type: String, trim: true, default: "" },
		experience: { type: String, trim: true, default: "" },
		coverNote: { type: String, trim: true, default: "" },
		resumeFileName: { type: String, trim: true, default: "" },
		resumePath: { type: String, trim: true, default: "" },
	},
	{ timestamps: true },
);

export type JobApplicationDocument = InferSchemaType<
	typeof JobApplicationSchema
>;

export const JobApplication =
	mongoose.models.JobApplication ??
	mongoose.model("JobApplication", JobApplicationSchema);
