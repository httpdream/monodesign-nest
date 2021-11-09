import { Injectable } from '@nestjs/common';
import { CreateCounselingDto } from './dto/create-counseling.dto';
import { UpdateCounselingDto } from './dto/update-counseling.dto';

@Injectable()
export class CounselingService {
  create(createCounselingDto: CreateCounselingDto) {
    return 'This action adds a new counseling';
  }

  findAll() {
    return `This action returns all counseling`;
  }

  findOne(id: number) {
    return `This action returns a #${id} counseling`;
  }

  update(id: number, updateCounselingDto: UpdateCounselingDto) {
    return `This action updates a #${id} counseling`;
  }

  remove(id: number) {
    return `This action removes a #${id} counseling`;
  }
}
