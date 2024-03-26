import { PartialType } from '@nestjs/swagger';
import { CreateTwentyFourDto } from './create-twenty-four.dto';

export class UpdateTwentyFourDto extends PartialType(CreateTwentyFourDto) {}
