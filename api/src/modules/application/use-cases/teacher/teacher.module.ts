import { Module } from '@nestjs/common';
import { ViewDisciplineController } from 'src/modules/application/use-cases/teacher/controllers/view-discipline.controller';
import { ViewStudentsController } from 'src/modules/application/use-cases/teacher/controllers/view-students.controller';
import { ViewDisciplineService } from 'src/modules/application/use-cases/teacher/services/view-discipline.service';
import { ViewStudentsService } from 'src/modules/application/use-cases/teacher/services/view-students.service';
import { EnrollmentModule } from 'src/modules/enrollment/enrollment.module';
import { NotificationModule } from 'src/modules/notification/notification.module';
import { DisciplineModule } from 'src/modules/secretary/discipline/discipline.module';

@Module({
  imports: [DisciplineModule, NotificationModule, EnrollmentModule],
  controllers: [ViewDisciplineController, ViewStudentsController],
  providers: [ViewDisciplineService, ViewStudentsService],
})
export class TeacherModule {}
