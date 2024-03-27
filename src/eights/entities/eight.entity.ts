import { MemberProfile } from 'src/member-profile/entities/member-profile.entity';
import { TwentyFour } from 'src/twenty-fours/entities/twenty-four.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Eight {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToOne(() => TwentyFour, (twentyFour) => twentyFour.eights)
  twentyFour: TwentyFour;

  @OneToMany(() => MemberProfile, (mem) => mem.eight)
  memberProfiles: MemberProfile[];
}
