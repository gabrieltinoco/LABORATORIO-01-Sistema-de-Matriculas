import { Injectable } from '@nestjs/common';
import { Enrollment } from '@prisma/client';
import { EnrollmentRepository } from 'src/modules/enrollment/repositories/enrollment.prisma.repository';

@Injectable()
export class EditEnrollmentService {
  constructor(private readonly repository: EnrollmentRepository) {}

  async execute(id: string, data: Partial<Enrollment>): Promise<Enrollment> {
    return this.repository.edit(id, data);
  }
}
