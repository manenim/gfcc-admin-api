import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TwentyFoursService } from './../twenty-fours/twenty-fours.service';
import { CreateEightDto } from './dto/create-eight.dto';
import { UpdateEightDto } from './dto/update-eight.dto';
import { Eight } from './entities/eight.entity';

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

  async batchCreate(twentyFourId: string) {
    const twentyFour = await this.twentyFoursService.findOne(twentyFourId);

    if (twentyFour?.eights?.length > 0)
      throw new BadRequestException(
        'Failed to create eight, They already exist!',
      );

    const { name, ...others } = twentyFour;

    const eightBatch = [
      {
        name: `${name}A`,
        memberProfiles: [],
        twentyFour,
      },
      {
        name: `${name}B`,
        memberProfiles: [],
        twentyFour,
      },
      {
        name: `${name}C`,
        memberProfiles: [],
        twentyFour,
      },
    ];

    const batch = await this.eightsRepository.save(eightBatch);
    return batch;
  }

  findOne(id: string) {
    return this.eightsRepository.findOne({
      where: { id },
      relations: {
        memberProfiles: true,
      },
    });
  }

  update(id: number, updateEightDto: UpdateEightDto) {
    return `This action updates a #${id} eight`;
  }

  remove(id: number) {
    return `This action removes a #${id} eight`;
  }
}
