import { Injectable } from '@nestjs/common';
import { Notification } from '@prisma/client';
import { CreateNotificationRequestDTO } from 'src/modules/notification/dtos/request/create-notification.request.dto';
import { NotificationRepository } from 'src/modules/notification/repositories/notification.prisma.repository';

@Injectable()
export class CreateNotificationService {
  constructor(private readonly repository: NotificationRepository) {}

  async execute({
    content,
    type,
    title,
    userId,
  }: CreateNotificationRequestDTO): Promise<Notification> {
    return this.repository.create(title, content, userId, type);
  }
}
