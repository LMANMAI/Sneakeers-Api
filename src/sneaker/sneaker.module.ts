import { Module } from '@nestjs/common';
import { SneakerService } from './sneaker.service';
import { SneakerController } from './sneaker.controller';
import { SneakerSchema } from './schemas/sneaker.schema';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Sneaker', schema: SneakerSchema }]),
  ],
  controllers: [SneakerController],
  providers: [SneakerService],
})
export class SneakerModule {}
