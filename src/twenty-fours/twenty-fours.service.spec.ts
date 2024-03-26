import { Test, TestingModule } from '@nestjs/testing';
import { TwentyFoursService } from './twenty-fours.service';

describe('TwentyFoursService', () => {
  let service: TwentyFoursService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TwentyFoursService],
    }).compile();

    service = module.get<TwentyFoursService>(TwentyFoursService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
