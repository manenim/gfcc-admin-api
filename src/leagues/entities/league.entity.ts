import { TwentyFour } from 'src/twenty-fours/entities/twenty-four.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class League {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  alias: string;

  @OneToMany(() => TwentyFour, (twentyFour) => twentyFour.league)
  twentyFours: TwentyFour[];
}
