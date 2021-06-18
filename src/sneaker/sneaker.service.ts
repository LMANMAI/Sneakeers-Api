import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Sneaker } from './interfaces/sneaker.interface';
import { CreateSneakerDTO } from './dto/sneaker.dto';
@Injectable()
export class SneakerService {
  constructor(
    @InjectModel('Sneaker') private readonly sneakerModel: Model<Sneaker>,
  ) {}

  async getSneakers(): Promise<Sneaker[]> {
    const sneakers = await this.sneakerModel.find();
    return sneakers;
  }
  async getSneaker(sneakerID: string): Promise<Sneaker> {
    const sneaker = await this.sneakerModel.findById(sneakerID);
    return sneaker;
  }
  async createSneaker(createSneakerDTO: CreateSneakerDTO): Promise<Sneaker> {
    const new_sneaker = new this.sneakerModel(createSneakerDTO);
    return await new_sneaker.save();
  }
  async updateSneaker(
    sneakerID: string,
    createSneakerDTO: CreateSneakerDTO,
  ): Promise<Sneaker> {
    const sneaker_updated = await this.sneakerModel.findByIdAndUpdate(
      sneakerID,
      createSneakerDTO,
      { new: true },
    );
    return sneaker_updated;
  }
  async deleteSneaker(sneakerID: string): Promise<Sneaker> {
    const deleted_sneaker = await this.sneakerModel.findByIdAndDelete(
      sneakerID,
    );
    return deleted_sneaker;
  }
}
