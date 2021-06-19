import { Document } from 'mongoose';
<<<<<<< HEAD

=======
>>>>>>> c559fadb3a45c05667d21481bc8bbb0048874d47
export interface ISneaker extends Document {
  readonly name: string;
  readonly relaseYear: string;
  readonly imageURL: string;
  readonly price: number;
  readonly brand: string;
  readonly createdAt: Date;
}
