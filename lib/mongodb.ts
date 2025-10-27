import mongoose, { Connection } from "mongoose";

// Define a global type for cached connections
declare global {
  // This ensures we can safely add our mongoose cache to the global object
  // without TypeScript complaining.
  // eslint-disable-next-line no-var
  var mongooseCache: { conn: Connection | null; promise: Promise<Connection> | null } | undefined;
}

interface CachedConnection {
  conn: Connection | null;
  promise: Promise<Connection> | null;
}

// ✅ Use const since this never changes
const cached: CachedConnection = global.mongooseCache || { conn: null, promise: null };

export async function connectToDatabase(): Promise<Connection> {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(process.env.MONGODB_URI as string, {
        dbName: process.env.MONGODB_DB_NAME,
      })
      .then((mongooseInstance) => mongooseInstance.connection);
  }

  cached.conn = await cached.promise;
  global.mongooseCache = cached;

  return cached.conn;
}
