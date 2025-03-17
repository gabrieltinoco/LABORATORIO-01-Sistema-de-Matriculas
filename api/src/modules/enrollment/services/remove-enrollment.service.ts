import { Injectable } from '@nestjs/common';
import { EnrollmentRepository } from 'src/modules/enrollment/repositories/enrollment.prisma.repository';

@Injectable()
export class RemoveEnrollmentService {
  constructor(private readonly repository: EnrollmentRepository) {}

  async execute(id: string): Promise<void> {
    return this.repository.delete(id);
  }
}
