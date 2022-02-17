import { Schema } from 'mongoose';
import { SneakerStatus } from '../interfaces/sneaker.interface';

export const SneakerSchema = new Schema({
  name: { required: true, trim: true, type: String },
  relaseYear: String,
  posterPathImage: { required: true, trim: true, type: String },
  price: Number,
  quantity: Number,
  brand: { required: true, trim: true, type: String },
  createdAt: { type: Date, default: Date.now },
  imgs: { type: [String] },
  genre: { type: String, required: true, trim: true },
  status: {
    type: String,
    enum: Object.values(SneakerStatus),
    default: SneakerStatus.DONE,
    required: true,
  },
  sizes: {
    type: [Number],
  },
});
