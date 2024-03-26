import { Module } from '@nestjs/common';
import { TwentyFoursService } from './twenty-fours.service';
import { TwentyFoursController } from './twenty-fours.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TwentyFour } from './entities/twenty-four.entity';
import { LeaguesService } from 'src/leagues/leagues.service';
import { League } from 'src/leagues/entities/league.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TwentyFour, League])],
  controllers: [TwentyFoursController],
  providers: [TwentyFoursService, LeaguesService],
})
export class TwentyFoursModule {}
