import { Injectable } from '@nestjs/common';
import { Enrollment } from '@prisma/client';
import { EnrollmentRepository } from 'src/modules/enrollment/repositories/enrollment.prisma.repository';

@Injectable()
export class FindEnrollmentService {
  constructor(private readonly repository: EnrollmentRepository) {}

  async execute(
    userId: string,
    disciplineId: string,
  ): Promise<Enrollment | null> {
    return this.repository.findBy(userId, disciplineId);
  }
}
