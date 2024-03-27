import { Eight } from 'src/eights/entities/eight.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MemberProfile {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  email: string;

  @Column()
  state: string;

  @ManyToOne(() => Eight, (eight) => eight.memberProfiles)
  eight: Eight;
}
