import { Module } from '@nestjs/common';
import { CurriculumModule } from 'src/modules/secretary/curriculum/curriculum.module';
import { DisciplineModule } from 'src/modules/secretary/discipline/discipline.module';

@Module({
  imports: [DisciplineModule, CurriculumModule],
  providers: [],
  controllers: [],
  exports: [],
})
export class SecretaryModule {}
