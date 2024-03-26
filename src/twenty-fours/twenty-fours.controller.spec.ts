import { Test, TestingModule } from '@nestjs/testing';
import { TwentyFoursController } from './twenty-fours.controller';
import { TwentyFoursService } from './twenty-fours.service';

describe('TwentyFoursController', () => {
  let controller: TwentyFoursController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TwentyFoursController],
      providers: [TwentyFoursService],
    }).compile();

    controller = module.get<TwentyFoursController>(TwentyFoursController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
