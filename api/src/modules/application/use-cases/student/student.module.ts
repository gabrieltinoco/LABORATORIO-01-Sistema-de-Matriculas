import { Module } from '@nestjs/common';
import { CancelEnrollmentController } from 'src/modules/application/use-cases/student/controllers/cancel-enrollment.controller';
import { DisciplineEnrollmentController } from 'src/modules/application/use-cases/student/controllers/discipline-enrollment.controller';
import { CancelEnrollmentService } from 'src/modules/application/use-cases/student/services/cancel-enrollment.service';
import { DisciplineEnrollmentService } from 'src/modules/application/use-cases/student/services/discipline-enrollment.service';
import { EnrollmentModule } from 'src/modules/enrollment/enrollment.module';
import { NotificationModule } from 'src/modules/notification/notification.module';
import { DisciplineModule } from 'src/modules/secretary/discipline/discipline.module';

@Module({
  imports: [DisciplineModule, NotificationModule, EnrollmentModule],
  controllers: [CancelEnrollmentController, DisciplineEnrollmentController],
  providers: [DisciplineEnrollmentService, CancelEnrollmentService],
})
export class StudentModule {}
