import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { CreateSneakerDTO } from './dto/sneaker.dto';

@Controller('sneaker')
export class SneakerController {
  @Get()
  getSneaker(): string {
    return 'Desde la ruta de las zapatillas';
  }

  @Post('/create')
  createSneaker(@Res() res, @Body() createSneakerDTO: CreateSneakerDTO) {
    console.log(createSneakerDTO);
    return res.status(HttpStatus.OK).json({ message: 'recived' });
  }
}
