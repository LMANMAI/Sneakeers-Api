import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SneakerController } from './sneaker/sneaker.controller';
import { SneakerModule } from './sneaker/sneaker.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    SneakerModule,
    MongooseModule.forRoot(
      'mongodb+srv://lucasmanmai:YellowRadio1@cluster0.fnusd.mongodb.net/sneaker',
      {
        useNewUrlParser: true,
      },
    ),
  ],
  controllers: [AppController, SneakerController],
  providers: [AppService],
})
export class AppModule {}
