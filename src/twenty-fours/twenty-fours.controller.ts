import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { TwentyFoursService } from './twenty-fours.service';
import { CreateTwentyFourDto } from './dto/create-twenty-four.dto';
import { UpdateTwentyFourDto } from './dto/update-twenty-four.dto';

@Controller('twenty-fours')
export class TwentyFoursController {
  constructor(private readonly twentyFoursService: TwentyFoursService) {}

  @Post('create')
  create(@Query('id') leagueId: string,  @Body() createTwentyFourDto: CreateTwentyFourDto) {
    return this.twentyFoursService.create(leagueId, createTwentyFourDto);
  }

  @Get()
  findAll() {
    return this.twentyFoursService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.twentyFoursService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTwentyFourDto: UpdateTwentyFourDto) {
    return this.twentyFoursService.update(id, updateTwentyFourDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.twentyFoursService.remove(+id);
  }
}
