import { Injectable } from '@nestjs/common';
import { Curriculum } from '@prisma/client';
import { CurriculumRepository } from 'src/modules/secretary/curriculum/repositories/curriculum.prisma.repository';
import { EditCurriculumRequestDTO } from '../dtos/request/edit-curriculum.request.dto';

@Injectable()
export class EditCurriculumService {
  constructor(private readonly repository: CurriculumRepository) {}

  async execute(
    id: string,
    { name, description }: EditCurriculumRequestDTO,
  ): Promise<Curriculum> {
    return this.repository.edit(id, name, description);
  }
}
