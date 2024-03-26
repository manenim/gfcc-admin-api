import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLeagueDto } from './dto/create-league.dto';
import { UpdateLeagueDto } from './dto/update-league.dto';
import { League } from './entities/league.entity';

@Injectable()
export class LeaguesService {
  constructor(
    @InjectRepository(League)
    private readonly leaguesRepository: Repository<League>,
  ) {}

  async create(createLeagueDto: CreateLeagueDto) {
    return await this.leaguesRepository.save(createLeagueDto);
  }

  async findAll() {
    return await this.leaguesRepository.find({
      relations: {
        twentyFours: true,
      },
    });
  }

  findOne(id: string) {
    return this.leaguesRepository.findOne({
      where: { id },
    });
  }

  async findOneByName(name: string) {
    return await this.leaguesRepository.findOne({
      where: {
        name,
      },
    });
  }

  update(id: number, updateLeagueDto: UpdateLeagueDto) {
    return `This action updates a #${id} league`;
  }

  remove(id: number) {
    return `This action removes a #${id} league`;
  }
}
