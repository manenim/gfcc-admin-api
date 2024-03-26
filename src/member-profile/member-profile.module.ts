import { Module } from '@nestjs/common';
import { MemberProfileService } from './member-profile.service';
import { MemberProfileController } from './member-profile.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MemberProfile } from './entities/member-profile.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MemberProfile])],
  controllers: [MemberProfileController],
  providers: [MemberProfileService],
})
export class MemberProfileModule {}
