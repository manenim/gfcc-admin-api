import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LeaguesService } from 'src/leagues/leagues.service';
import { Repository } from 'typeorm';
import { CreateTwentyFourDto } from './dto/create-twenty-four.dto';
import { UpdateTwentyFourDto } from './dto/update-twenty-four.dto';
import { TwentyFour } from './entities/twenty-four.entity';

@Injectable()
export class TwentyFoursService {
  constructor(
    @InjectRepository(TwentyFour)
    private readonly twentyFourRepository: Repository<TwentyFour>,
    private readonly leagesService: LeaguesService,
  ) {}
  async create(leagueId: string,  createTwentyFourDto: CreateTwentyFourDto) {
   
    const league = await this.leagesService.findOne(leagueId);
    let twentyFour = new TwentyFour();
    twentyFour.league = league;

    twentyFour = {...twentyFour, ...createTwentyFourDto  };
    return await this.twentyFourRepository.save(twentyFour);
  }

  async findAll() {
    return await this.twentyFourRepository.find({
      relations: {
        league: true,
        eights: true
    }});
  }

  async findOne(id: string) {
    return await this.twentyFourRepository.findOne({
      where: {
        id
      }
    });
  }

  update(id: string, updateTwentyFourDto: UpdateTwentyFourDto) {
    return `This action updates a #${id} twentyFour`;
  }

  remove(id: number) {
    return `This action removes a #${id} twentyFour`;
  }
}
