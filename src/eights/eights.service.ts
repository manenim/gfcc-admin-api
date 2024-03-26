import { TwentyFoursService } from './../twenty-fours/twenty-fours.service';
import { Injectable } from '@nestjs/common';
import { CreateEightDto } from './dto/create-eight.dto';
import { UpdateEightDto } from './dto/update-eight.dto';
import { Eight } from './entities/eight.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EightsService {
  constructor(
    @InjectRepository(Eight)
    private readonly eightsRepository: Repository<Eight>,
    private readonly twentyFoursService: TwentyFoursService,
  ) {}
  async create(twentyFourId: string, createEightDto: CreateEightDto) {
    const twentyFour = await this.twentyFoursService.findOne(twentyFourId);

    let eight = new Eight();
    eight.twentyFour = twentyFour;

    eight = { ...eight, ...createEightDto };
     return await this.eightsRepository.save(eight);
  }

  async findAll() {
    return await this.eightsRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} eight`;
  }

  update(id: number, updateEightDto: UpdateEightDto) {
    return `This action updates a #${id} eight`;
  }

  remove(id: number) {
    return `This action removes a #${id} eight`;
  }
}
