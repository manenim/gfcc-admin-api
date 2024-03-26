import { Injectable } from '@nestjs/common';
import { CreateMemberProfileDto } from './dto/create-member-profile.dto';
import { UpdateMemberProfileDto } from './dto/update-member-profile.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MemberProfile } from './entities/member-profile.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MemberProfileService {
  constructor(
    @InjectRepository(MemberProfile)
    private readonly memberProfileRepository: Repository<MemberProfile>
  ){}
  create(createMemberProfileDto: CreateMemberProfileDto) {
    return this.memberProfileRepository.save(createMemberProfileDto);
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
