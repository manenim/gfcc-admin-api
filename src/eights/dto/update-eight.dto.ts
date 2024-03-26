import { PartialType } from '@nestjs/swagger';
import { CreateEightDto } from './create-eight.dto';

export class UpdateEightDto extends PartialType(CreateEightDto) {}
