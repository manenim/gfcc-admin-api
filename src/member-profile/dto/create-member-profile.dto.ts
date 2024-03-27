import { IsString } from 'class-validator';

export class CreateMemberProfileDto {
  @IsString()
  firstname: string;

  @IsString()
  lastname: string;

  @IsString()
  email: string;

  @IsString()
  state: string;

  @IsString()
  eightId: string;
}
