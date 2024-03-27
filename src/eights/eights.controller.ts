import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EightsService } from './eights.service';
import { CreateEightDto } from './dto/create-eight.dto';
import { UpdateEightDto } from './dto/update-eight.dto';

@Controller('eights')
export class EightsController {
  constructor(private readonly eightsService: EightsService) {}

  @Post(':twentyfourId/create')
  create(
    @Param('twentyfourId') twentyFourId: string,
    @Body() createEightDto: CreateEightDto,
  ) {
    return this.eightsService.create(twentyFourId, createEightDto);
  }

  @Post(':twentyfourId/batchCreate')
  batchCreate(
    @Param('twentyfourId') twentyFourId: string,
  ) {
    return this.eightsService.batchCreate(twentyFourId);
  }

  @Get()
  findAll() {
    return this.eightsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eightsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEightDto: UpdateEightDto) {
    return this.eightsService.update(+id, updateEightDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eightsService.remove(+id);
  }
}
