import { Body, Controller, Get , Post} from '@nestjs/common';

@Controller('sneaker')

export class SneakerController {
    @Get()
    getSneaker():string{
    return 'Desde la ruta de las zapatillas';
}

@Post()
sendSneaker(@Body() sneaker):string {
    console.log(sneaker);
    return "Creando una zapatilla";
}

}
