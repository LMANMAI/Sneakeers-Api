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
  Query,
  Req,
} from '@nestjs/common';
import { GetSneakersDto } from './dto/get-sneakers-filter.dto';
import { ISneaker, SneakerStatus } from './interfaces/sneaker.interface';
import { SneakerService } from './sneaker.service';
@Controller('sneaker')
export class SneakerController {
  constructor(private sneakerService: SneakerService) {}

  @Get('/')
  async getSneakers(@Res() res): Promise<ISneaker> {
    const sneakers = await this.sneakerService.findAll();
    return res.status(HttpStatus.OK).json({ sneakers });
  }
  @Get('/search')
  async getSneakerWithFilter(
    @Query() filterDto: GetSneakersDto,
    @Res() res,
    @Req() req,
  ): Promise<ISneaker> {
    console.log('Este es el cuerpo de mi consulta: ', req.query);
    // sneakers.status = SneakerStatus.OPEN
    const sneakers = await this.sneakerService.findAllWithFilter(filterDto);
    return res.status(HttpStatus.OK).json({ sneakers });
  }
  @Get('/:sneakerID')
  async getSneaker(@Res() res, @Param('sneakerID') sneakerID) {
    const sneaker = await this.sneakerService.findOne(sneakerID);
    if (!sneaker) throw new NotFoundException("Sneaker doesn't exists");
    sneaker.status = SneakerStatus.OPEN;
    return res.status(HttpStatus.OK).json({ sneaker });
  }

  @Post('/create')
  async createSneaker(@Res() res, @Body() sneaker: ISneaker) {
    const createSneaker = await this.sneakerService.create(sneaker);
    return res
      .status(HttpStatus.OK)
      .json({ message: 'Sneaker created succesfully', createSneaker });
  }

  @Delete('/delete/:sneakerID')
  async deleteSneaker(@Res() res, @Param('sneakerID') sneakerID) {
    const deleted_sneaker = await this.sneakerService.delete(sneakerID);
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
    @Body() sneaker: ISneaker,
    @Param('sneakerID') sneakerID,
  ) {
    const new_sneaker = await this.sneakerService.update(sneakerID, sneaker);
    if (!new_sneaker) throw new NotFoundException('Cannot update the sneaker');
    res.status(HttpStatus.OK).json({ new_sneaker });
  }
}
