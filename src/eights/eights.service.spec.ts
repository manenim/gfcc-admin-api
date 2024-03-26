import { Test, TestingModule } from '@nestjs/testing';
import { EightsService } from './eights.service';

describe('EightsService', () => {
  let service: EightsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EightsService],
    }).compile();

    service = module.get<EightsService>(EightsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
