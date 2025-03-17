import { Injectable } from '@nestjs/common';
import { Enrollment } from '@prisma/client';
import { CreateEnrollmentRequestDTO } from 'src/modules/enrollment/dtos/request/create-enrollment.request.dto';
import { EnrollmentRepository } from 'src/modules/enrollment/repositories/enrollment.prisma.repository';

@Injectable()
export class CreateEnrollmentService {
  constructor(private readonly repository: EnrollmentRepository) {}

  async execute({
    userId,
    disciplineId,
  }: CreateEnrollmentRequestDTO): Promise<Enrollment> {
    return this.repository.create(userId, disciplineId);
  }
}
