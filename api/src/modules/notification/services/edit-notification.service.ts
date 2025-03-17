import { Injectable } from '@nestjs/common';
import { Notification } from '@prisma/client';
import { EditNotificationRequestDTO } from 'src/modules/notification/dtos/request/edit-notification.request.dto';
import { NotificationRepository } from 'src/modules/notification/repositories/notification.prisma.repository';

@Injectable()
export class EditNotificationService {
  constructor(private readonly repository: NotificationRepository) {}

  async execute(
    id: string,
    { content, status, title, type, userId }: EditNotificationRequestDTO,
  ): Promise<Notification> {
    return this.repository.edit(id, title, content, userId, type, status);
  }
}
