import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/modules/prisma/prisma.module';
import { CreateNotificationService } from 'src/modules/notification/services/create-notification.service';
import { RemoveNotificationService } from 'src/modules/notification/services/remove-notification.service';
import { EditNotificationService } from 'src/modules/notification/services/edit-notification.service';
import { NotificationRepository } from 'src/modules/notification/repositories/notification.prisma.repository';

@Module({
  imports: [PrismaModule],
  providers: [
    CreateNotificationService,
    RemoveNotificationService,
    EditNotificationService,
    NotificationRepository,
  ],
  controllers: [],
  exports: [
    CreateNotificationService,
    RemoveNotificationService,
    EditNotificationService,
  ],
})
export class NotificationModule {}
