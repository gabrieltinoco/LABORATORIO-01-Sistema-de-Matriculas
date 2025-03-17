import { Module } from '@nestjs/common';
import { ChargeNodule } from 'src/modules/application/use-cases/charge/charge.module';
import { StudentModule } from 'src/modules/application/use-cases/student/student.module';
import { TeacherModule } from 'src/modules/application/use-cases/teacher/teacher.module';

@Module({
  imports: [ChargeNodule, StudentModule, TeacherModule],
})
export class UseCasesModule {}
