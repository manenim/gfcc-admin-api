import { Module } from '@nestjs/common';
import { MemberProfileService } from './member-profile.service';
import { MemberProfileController } from './member-profile.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MemberProfile } from './entities/member-profile.entity';
import { Eight } from 'src/eights/entities/eight.entity';
import { EightsService } from 'src/eights/eights.service';
import { TwentyFour } from 'src/twenty-fours/entities/twenty-four.entity';
import { TwentyFoursService } from 'src/twenty-fours/twenty-fours.service';
import { LeaguesService } from 'src/leagues/leagues.service';
import { League } from 'src/leagues/entities/league.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MemberProfile, Eight, TwentyFour, League])],
  controllers: [MemberProfileController],
  providers: [MemberProfileService, EightsService, TwentyFoursService, LeaguesService],
})
export class MemberProfileModule {}
