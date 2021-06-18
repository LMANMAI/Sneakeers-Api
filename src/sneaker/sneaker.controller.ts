import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Res,
  HttpStatus,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { CreateSneakerDTO } from './dto/sneaker.dto';
import { Sneaker } from './interfaces/sneaker.interface';
import { SneakerService } from './sneaker.service';
@Controller('sneaker')
export class SneakerController {
  constructor(private sneakerService: SneakerService) {}

  @Get('/')
  async getSneakers(@Res() res): Promise<Sneaker> {
    const sneakers = await this.sneakerService.getSneakers();
    return res.status(HttpStatus.OK).json({ sneakers });
  }

  @Get('/:sneakerID')
  async getSneaker(@Res() res, @Param('sneakerID') sneakerID) {
    const sneaker = await this.sneakerService.getSneaker(sneakerID);
    if (!sneaker) throw new NotFoundException("Sneaker doesn't exists");
    return res.status(HttpStatus.OK).json({ sneaker });
  }

  @Post('/create')
  async createSneaker(@Res() res, @Body() createSneakerDTO: CreateSneakerDTO) {
    const sneaker = await this.sneakerService.createSneaker(createSneakerDTO);
    return res
      .status(HttpStatus.OK)
      .json({ message: 'Sneaker created succesfully', sneaker });
  }
  @Delete('/delete/:sneakerID')
  async deleteSneaker(@Res() res, @Param('sneakerID') sneakerID) {
    const deleted_sneaker = await this.sneakerService.deleteSneaker(sneakerID);
    if (!deleted_sneaker)
      throw new NotFoundException(
        "Sneaker doesn't exists or already been deleted",
      );
    res
      .status(HttpStatus.OK)
      .json({ message: 'this was the sneaker deleted', deleted_sneaker });
  }
  @Put('/update/:sneakerID')
  async updateSneaker(
    @Res() res,
    @Body() createSneakerDTO: CreateSneakerDTO,
    @Param('sneakerID') sneakerID,
  ) {
    const new_sneaker = await this.sneakerService.updateSneaker(
      sneakerID,
      createSneakerDTO,
    );
    if (!new_sneaker) throw new NotFoundException('Cannot update the sneaker');
    res.status(HttpStatus.OK).json({ new_sneaker });
  }
}
