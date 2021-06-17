import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SneakerController } from './sneaker/sneaker.controller';

@Module({
  imports: [],
  controllers: [AppController, SneakerController],
  providers: [AppService],
})
export class AppModule {}
