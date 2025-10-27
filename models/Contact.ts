import mongoose, { Schema, Document } from "mongoose";

export interface IContact extends Document {
  name: string;
  email: string;
  phone?: string;
  message: string;
  fileUrl?: string; // ✅ added for Cloudinary file link
  createdAt: Date;
}

const ContactSchema = new Schema<IContact>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    message: { type: String, required: true },
    fileUrl: { type: String }, // ✅ new field to store uploaded file URL
  },
  {
    timestamps: { createdAt: true, updatedAt: false }, // ✅ auto adds createdAt
  }
);

export default mongoose.models.Contact ||
  mongoose.model<IContact>("Contact", ContactSchema);

