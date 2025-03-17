import { Injectable } from '@nestjs/common';
import { DisciplineEnrollmentRequestDto } from 'src/modules/application/use-cases/student/dtos/request/discipline-enrollment.request.dto';
import { RemoveEnrollmentService } from 'src/modules/enrollment/services/remove-enrollment.service';
import { FindEnrollmentService } from 'src/modules/enrollment/services/find-enrollment.service';

@Injectable()
export class CancelEnrollmentService {
  constructor(
    private readonly removeEnrollmentService: RemoveEnrollmentService,
    private readonly findEnrollmentService: FindEnrollmentService,
  ) {}

  async execute({
    disciplineId,
    studentId,
  }: DisciplineEnrollmentRequestDto): Promise<void> {
    const enrollment = await this.findEnrollmentService.execute(
      studentId,
      disciplineId,
    );

    if (!enrollment) {
      throw new Error('Enrollment not found');
    }

    await this.removeEnrollmentService.execute(enrollment.id);
  }
}
