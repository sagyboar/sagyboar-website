import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

type MongooseCache = {
	conn: typeof mongoose | null;
	promise: Promise<typeof mongoose> | null;
};

declare global {
	// eslint-disable-next-line no-var
	var _mongooseCache: MongooseCache | undefined;
}

const cached: MongooseCache = global._mongooseCache ?? {
	conn: null,
	promise: null,
};

if (!global._mongooseCache) {
	global._mongooseCache = cached;
}

/**
 * Returns a cached Mongoose connection, creating one on first use.
 * Requires the MONGODB_URI environment variable to be set.
 */
export async function connectToDatabase(): Promise<typeof mongoose> {
	if (!MONGODB_URI) {
		throw new Error(
			"MONGODB_URI is not set. Add it to your environment to enable database storage.",
		);
	}

	if (cached.conn) {
		return cached.conn;
	}

	if (!cached.promise) {
		cached.promise = mongoose.connect(MONGODB_URI, {
			bufferCommands: false,
		});
	}

	try {
		cached.conn = await cached.promise;
	} catch (error) {
		cached.promise = null;
		throw error;
	}

	return cached.conn;
}
