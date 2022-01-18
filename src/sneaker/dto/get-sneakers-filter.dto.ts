import { SneakerStatus } from '../interfaces/sneaker.interface';

export class GetSneakersDto {
  status: SneakerStatus;
  search: string;
}
