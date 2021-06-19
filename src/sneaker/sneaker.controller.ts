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
import { ISneaker } from './interfaces/sneaker.interface';
import { SneakerService } from './sneaker.service';
@Controller('sneaker')
export class SneakerController {
  constructor(private sneakerService: SneakerService) {}

  @Get('/')
  async getSneakers(@Res() res): Promise<ISneaker> {
    const sneakers = await this.sneakerService.findAll();
    return res.status(HttpStatus.OK).json({ sneakers });
  }

  @Get('/:sneakerID')
  async getSneaker(@Res() res, @Param('sneakerID') sneakerID) {
    const sneaker = await this.sneakerService.findOne(sneakerID);
    if (!sneaker) throw new NotFoundException("Sneaker doesn't exists");
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
    const newSneaker = await this.sneakerService.update(sneakerID, sneaker);
    if (!newSneaker) throw new NotFoundException('Cannot update the sneaker');
    res.status(HttpStatus.OK).json({ newSneaker });
  }
}
