import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ISneaker } from './interfaces/sneaker.interface';
import { GetSneakersDto } from './dto/get-sneakers-filter.dto';
import { QueryOptions } from './config/query-options';

@Injectable()
export class SneakerService {
  constructor(
    @InjectModel('Sneaker') private readonly sneakerModel: Model<ISneaker>,
  ) {}

  async findAll(options: QueryOptions) {
    const sneakers = await this.sneakerModel
      .find()
      .skip(Number(options.offset))
      .limit(Number(options.limit))
      .exec();
    return sneakers;
  }
  async findAllWithFilter(filterDto: GetSneakersDto): Promise<ISneaker[]> {
    const { status, search } = filterDto;
    console.log(filterDto);
    let sneakers = await this.sneakerModel.find();
    if (status) {
      sneakers = sneakers.filter((sneaker) => sneaker.status === status);
    }
    if (search) {
      sneakers = sneakers.filter(
        (sneaker) =>
          sneaker.name.includes(search) || sneaker.status.includes(status),
      );
    }
    return sneakers;
  }
  async findOne(sneakerID: string): Promise<ISneaker> {
    const sneaker = await this.sneakerModel.findById(sneakerID);
    return sneaker;
  }
  async create(sneaker: ISneaker): Promise<ISneaker> {
    const new_sneaker = new this.sneakerModel(sneaker);
    return await new_sneaker.save();
  }
  async update(sneakerID: string, sneaker: ISneaker): Promise<ISneaker> {
    const sneaker_updated = await this.sneakerModel.findByIdAndUpdate(
      sneakerID,
      sneaker,
      { new: true },
    );
    return sneaker_updated;
  }

  async delete(sneakerID: string): Promise<ISneaker> {
    const deleted_sneaker = await this.sneakerModel.findByIdAndDelete(
      sneakerID,
    );
    return deleted_sneaker;
  }
}
