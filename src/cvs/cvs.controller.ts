import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

import { CreateCvDto } from './dto/create-cv.dto';
import { UpdateCvDto } from './dto/update-cv.dto';
import { CvsService } from './cvs.service';

@Controller('cvs')
export class CvsController {
  constructor(private readonly cvsService: CvsService) {}

  @Post()
  create(@Body() createCvDto: CreateCvDto) {
    return this.cvsService.create(createCvDto);
  }

  @Get()
  findAll() {
    return this.cvsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cvsService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCvDto: UpdateCvDto) {
    return this.cvsService.update(+id, updateCvDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cvsService.remove(+id);
  }
}