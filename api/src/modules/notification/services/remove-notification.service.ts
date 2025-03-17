import { Injectable } from '@nestjs/common';
import { NotificationRepository } from 'src/modules/notification/repositories/notification.prisma.repository';

@Injectable()
export class RemoveNotificationService {
  constructor(private readonly repository: NotificationRepository) {}

  async execute(id: string): Promise<void> {
    return this.repository.delete(id);
  }
}
