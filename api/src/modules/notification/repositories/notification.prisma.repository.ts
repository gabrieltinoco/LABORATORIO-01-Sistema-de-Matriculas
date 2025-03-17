import { Injectable } from '@nestjs/common';
import { Notification } from '@prisma/client';
import { NotificationStatus } from 'src/modules/notification/enums/notification-status.enum';
import { NotificationType } from 'src/modules/notification/enums/notification-type.enum';
import { PrismaService } from 'src/modules/prisma/prisma.service';

@Injectable()
export class NotificationRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    title: string,
    content: string,
    userId: string,
    type: string,
  ): Promise<Notification> {
    return this.prisma.notification.create({
      data: {
        title,
        content,
        userId,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        type: NotificationType[type],
      },
    });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.notification.delete({
      where: {
        id,
      },
    });
  }

  async edit(
    id: string,
    title: string,
    content: string,
    userId: string,
    type: string,
    status: string,
  ): Promise<Notification> {
    return this.prisma.notification.update({
      where: {
        id,
      },
      data: {
        title,
        content,
        userId,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        type: NotificationType[type],
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        status: NotificationStatus[status],
      },
    });
  }
}
