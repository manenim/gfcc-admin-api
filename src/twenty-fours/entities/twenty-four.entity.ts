import { Eight } from 'src/eights/entities/eight.entity';
import { League } from 'src/leagues/entities/league.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class TwentyFour {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToOne(() => League, (league) => league.twentyFours)
  league: League;

  @OneToMany(() => Eight, (eight) => eight.twentyFour)
  eights: Eight[];
}
