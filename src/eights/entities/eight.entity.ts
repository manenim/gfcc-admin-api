import { TwentyFour } from 'src/twenty-fours/entities/twenty-four.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Eight {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToOne(() => TwentyFour, (twentyFour) => twentyFour.eights)
  twentyFour: TwentyFour;
}
