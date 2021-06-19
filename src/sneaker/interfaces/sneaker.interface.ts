import { Document } from 'mongoose';

export interface ISneaker extends Document {
  readonly name: string;
  readonly relaseYear: string;
  readonly imageURL: string;
  readonly price: number;
  readonly brand: string;
  readonly createdAt: Date;
}
