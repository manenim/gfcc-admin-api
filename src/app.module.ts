import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { MemberProfileModule } from './member-profile/member-profile.module';
import { LeaguesModule } from './leagues/leagues.module';
import { EightsModule } from './eights/eights.module';
import { TwentyFoursModule } from './twenty-fours/twenty-fours.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    AuthModule,
    UsersModule,
    MemberProfileModule,
    LeaguesModule,
    EightsModule,
    TwentyFoursModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
