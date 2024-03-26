import { Test, TestingModule } from '@nestjs/testing';
import { MemberProfileController } from './member-profile.controller';
import { MemberProfileService } from './member-profile.service';

describe('MemberProfileController', () => {
  let controller: MemberProfileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MemberProfileController],
      providers: [MemberProfileService],
    }).compile();

    controller = module.get<MemberProfileController>(MemberProfileController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
