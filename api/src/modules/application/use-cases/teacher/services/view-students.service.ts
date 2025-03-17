import { Injectable } from '@nestjs/common';
import { FindByDisciplineIdEnrollmentService } from 'src/modules/enrollment/services/find-by-discipline-id-enrollment.service';

@Injectable()
export class ViewStudentsService {
  constructor(private readonly service: FindByDisciplineIdEnrollmentService) {}
  async execute(id: string): Promise<string[]> {
    const enrollments = await this.service.execute(id);

    if (!enrollments) {
      throw new Error('Enrollments not found');
    }

    return enrollments.map((enrollment) => enrollment.userId);
  }
}
