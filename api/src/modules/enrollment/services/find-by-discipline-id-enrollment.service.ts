import { Injectable } from '@nestjs/common';
import { Enrollment } from '@prisma/client';
import { EnrollmentRepository } from 'src/modules/enrollment/repositories/enrollment.prisma.repository';

@Injectable()
export class FindByDisciplineIdEnrollmentService {
  constructor(private readonly repository: EnrollmentRepository) {}

  async execute(disciplineId: string): Promise<Enrollment[] | null> {
    return this.repository.findManyByDisciplineId(disciplineId);
  }
}
