import { Test, TestingModule } from '@nestjs/testing';
import { SneakerService } from './sneaker.service';

describe('SneakerService', () => {
  let service: SneakerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SneakerService],
    }).compile();

    service = module.get<SneakerService>(SneakerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
