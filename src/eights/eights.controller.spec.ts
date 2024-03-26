import { Test, TestingModule } from '@nestjs/testing';
import { EightsController } from './eights.controller';
import { EightsService } from './eights.service';

describe('EightsController', () => {
  let controller: EightsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EightsController],
      providers: [EightsService],
    }).compile();

    controller = module.get<EightsController>(EightsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
