import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
