import { Injectable } from '@nestjs/common';
import { CreateDisciplineRequestDTO } from 'src/modules/secretary/discipline/dtos/request/create-discipline.request.dto';
import { CreateDisciplineResponseDTO } from 'src/modules/secretary/discipline/dtos/response/create-discipline.response.dto';
import { DisciplineRepository } from 'src/modules/secretary/discipline/repositories/discipline.prisma.repository';

@Injectable()
export class CreateDisciplineService {
  constructor(private readonly repository: DisciplineRepository) {}

  async execute({
    courseId,
    credits,
    curriculumId,
    description,
    name,
    price,
    professorId,
    semester,
  }: CreateDisciplineRequestDTO): Promise<CreateDisciplineResponseDTO> {
    return this.repository.create(
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
