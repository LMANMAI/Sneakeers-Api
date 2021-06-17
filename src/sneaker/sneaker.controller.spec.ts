import { Test, TestingModule } from '@nestjs/testing';
import { SneakerController } from './sneaker.controller';

describe('SneakerController', () => {
  let controller: SneakerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SneakerController],
    }).compile();

    controller = module.get<SneakerController>(SneakerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
