import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SneakerModule } from './sneaker/sneaker.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: './.env', isGlobal: true }),
    MongooseModule.forRoot(process.env.DB_URL, { useNewUrlParser: true }),
    SneakerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
