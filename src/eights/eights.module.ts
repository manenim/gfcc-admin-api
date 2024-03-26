import { Module } from '@nestjs/common';
import { EightsService } from './eights.service';
import { EightsController } from './eights.controller';
import { Eight } from './entities/eight.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TwentyFoursService } from 'src/twenty-fours/twenty-fours.service';
import { TwentyFour } from 'src/twenty-fours/entities/twenty-four.entity';
import { League } from 'src/leagues/entities/league.entity';
import { LeaguesService } from 'src/leagues/leagues.service';

@Module({
  imports: [TypeOrmModule.forFeature([Eight, TwentyFour, League])],
  controllers: [EightsController],
  providers: [EightsService, TwentyFoursService, LeaguesService],
})
export class EightsModule {}
