import { Injectable } from '@nestjs/common';
import { NotifyStudentRequestDTO } from 'src/modules/application/use-cases/charge/dtos/request/notify-student.request.dto';
import { CreateNotificationService } from 'src/modules/notification/services/create-notification.service';
import { ReadChargeService } from 'src/modules/charge/services/read-charge.service';
import { NotificationType } from 'src/modules/notification/enums/notification-type.enum';
import { Notification } from '@prisma/client';

@Injectable()
export class NotifyStudentService {
  constructor(
    private readonly createNotificationService: CreateNotificationService,
    private readonly readChargeService: ReadChargeService,
  ) {}

  async execute({
    chargeId,
    studentId,
  }: NotifyStudentRequestDTO): Promise<Notification> {
    const charge = await this.readChargeService.execute(chargeId);

    if (!charge) {
      throw new Error('Charge not found');
    }

    return this.createNotificationService.execute({
      content: `You have a new charge of ${charge.amount} to pay, please check it out.`,
      type: NotificationType.Info,
      title: 'Charge notification',
      userId: studentId,
    });
  }
}
