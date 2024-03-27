import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MemberProfile } from 'src/member-profile/entities/member-profile.entity';
import { Repository } from 'typeorm';
import { EightsService } from './../eights/eights.service';
import { CreateMemberProfileDto } from './dto/create-member-profile.dto';
import { UpdateMemberProfileDto } from './dto/update-member-profile.dto';

@Injectable()
export class MemberProfileService {
  constructor(
    @InjectRepository(MemberProfile)
    private readonly memberProfileRepository: Repository<MemberProfile>,
    private readonly eightsService: EightsService,
  ) {}
  async create(createMemberProfileDto: CreateMemberProfileDto) {
    const { eightId, ...others } = createMemberProfileDto;
    const eight = await this.eightsService.findOne(eightId);
    const maxGroupCapacity = 8
    if (eight?.memberProfiles?.length >= maxGroupCapacity)
      throw new BadRequestException(
        'Cannot add this profile because this Eight group is full',
      );
    const memberProfile = { ...others, eight };
    return this.memberProfileRepository.save(memberProfile);
  }

  findAll() {
    return this.memberProfileRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} memberProfile`;
  }

  update(id: number, updateMemberProfileDto: UpdateMemberProfileDto) {
    return `This action updates a #${id} memberProfile`;
  }

  remove(id: number) {
    return `This action removes a #${id} memberProfile`;
  }
}
