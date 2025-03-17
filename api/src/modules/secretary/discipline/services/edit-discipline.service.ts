import { Injectable } from '@nestjs/common';
import { Discipline } from '@prisma/client';
import { EditDisciplineRequestDTO } from 'src/modules/secretary/discipline/dtos/request/edit-discipline.request.dto';
import { DisciplineRepository } from 'src/modules/secretary/discipline/repositories/discipline.prisma.repository';

@Injectable()
export class EditDisciplineService {
  constructor(private readonly repository: DisciplineRepository) {}

  async execute(
    id: string,
    {
      courseId,
      credits,
      curriculumId,
      description,
      name,
      price,
      professorId,
      semester,
    }: EditDisciplineRequestDTO,
  ): Promise<Discipline> {
    return this.repository.edit(
      id,
      courseId,
      credits,
      description,
      name,
      price,
      semester,
      curriculumId,
      professorId,
    );
  }
}
