import { Schema } from 'mongoose';
export const SneakerSchema = new Schema({
  name: { required: true, trim: true, type: String },
  relaseYear: String,
  imageURL: { required: true, trim: true, type: String },
  price: Number,
  brand: { required: true, trim: true, type: String },
  createdAt: { type: Date, default: Date.now },
});
