import { Document } from 'mongoose';
export interface ISneaker extends Document {
  readonly name: string;
  readonly relaseYear: string;
  readonly imgs: string[];
  readonly price: number;
  readonly brand: string;
  readonly createdAt: Date;
  readonly posterPathImage: string;
  readonly genre: string;
  readonly sizes: Number[];
  readonly quantity: Number;
  status: SneakerStatus;
}

export enum SneakerStatus {
  OPEN = 'OPEN',
  IN_PROGREES = 'IN_PROGREES',
  DONE = 'DONE',
}
