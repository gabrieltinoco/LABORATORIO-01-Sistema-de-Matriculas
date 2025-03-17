import { Module } from '@nestjs/common';
import { NotifyStudentController } from 'src/modules/application/use-cases/charge/controllers/notify-student.controller';
import { ProcessStudentChargeController } from 'src/modules/application/use-cases/charge/controllers/process-student-charge.controller';
import { NotifyStudentService } from 'src/modules/application/use-cases/charge/services/notify-student.service';
import { ProcessStudentChargeService } from 'src/modules/application/use-cases/charge/services/process-student-charge.service';
import { ChargeModule } from 'src/modules/charge/charge.module';
import { NotificationModule } from 'src/modules/notification/notification.module';

@Module({
  imports: [ChargeModule, NotificationModule],
  providers: [NotifyStudentService, ProcessStudentChargeService],
  controllers: [NotifyStudentController, ProcessStudentChargeController],
})
export class ChargeNodule {}
