import { Injectable } from '@nestjs/common';
import { Curriculum } from '@prisma/client';
import { CreateCurriculumRequestDTO } from 'src/modules/secretary/curriculum/dtos/request/create-curriculum.request.dto';
import { CurriculumRepository } from 'src/modules/secretary/curriculum/repositories/curriculum.prisma.repository';

@Injectable()
export class CreateCurriculumService {
  constructor(private readonly repository: CurriculumRepository) {}

  async execute({
    name,
    description,
  }: CreateCurriculumRequestDTO): Promise<Curriculum> {
    return this.repository.create(name, description);
  }
}
