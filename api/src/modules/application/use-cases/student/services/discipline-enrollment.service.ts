import { Injectable } from '@nestjs/common';
import { CreateNotificationService } from 'src/modules/notification/services/create-notification.service';
import { NotificationType } from 'src/modules/notification/enums/notification-type.enum';
import { Notification } from '@prisma/client';
import { DisciplineEnrollmentRequestDto } from 'src/modules/application/use-cases/student/dtos/request/discipline-enrollment.request.dto';
import { ReadDisciplineService } from 'src/modules/secretary/discipline/services/read-discipline.service';
import { CreateEnrollmentService } from 'src/modules/enrollment/services/create-enrollment.service';

@Injectable()
export class DisciplineEnrollmentService {
  constructor(
    private readonly readDisciplineService: ReadDisciplineService,
    private readonly createNotificationService: CreateNotificationService,
    private readonly createEnrollmentService: CreateEnrollmentService,
  ) {}

  async execute({
    disciplineId,
    studentId,
  }: DisciplineEnrollmentRequestDto): Promise<Notification> {
    const discipline = await this.readDisciplineService.execute(disciplineId);

    if (!discipline) {
      throw new Error('Discipline not found');
    }

    await this.createEnrollmentService.execute({
      disciplineId,
      userId: studentId,
    });

    const content = `You have been enrolled in the discipline ${discipline.name}, please check it out.`;

    return this.createNotificationService.execute({
      content,
      type: NotificationType.Info,
      title: 'Enrollment notification',
      userId: studentId,
    });
  }
}
