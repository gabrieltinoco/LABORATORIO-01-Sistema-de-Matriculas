import { Module } from '@nestjs/common';
import { ChargeModule } from 'src/modules/charge/charge.module';
import { CourseModule } from 'src/modules/secretary/course/course.module';
import { CurriculumModule } from 'src/modules/secretary/curriculum/curriculum.module';
import { DisciplineModule } from 'src/modules/secretary/discipline/discipline.module';

@Module({
  imports: [DisciplineModule, CurriculumModule, CourseModule, ChargeModule],
  providers: [],
  controllers: [],
  exports: [],
})
export class SecretaryModule {}
