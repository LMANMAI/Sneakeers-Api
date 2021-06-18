import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SneakerModule } from './sneaker/sneaker.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://lucasmanmai:YellowRadio1@cluster0.fnusd.mongodb.net/sneaker',
      { useNewUrlParser: true },
    ),
    SneakerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
