import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CounselingService } from './counseling.service';
import { CreateCounselingDto } from './dto/create-counseling.dto';
import { UpdateCounselingDto } from './dto/update-counseling.dto';

@Controller('counseling')
export class CounselingController {
  constructor(private readonly counselingService: CounselingService) {}

  @Post()
  create(@Body() createCounselingDto: CreateCounselingDto) {
    return this.counselingService.create(createCounselingDto);
  }

  @Get()
  findAll() {
    return this.counselingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.counselingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCounselingDto: UpdateCounselingDto) {
    return this.counselingService.update(+id, updateCounselingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.counselingService.remove(+id);
  }
}
