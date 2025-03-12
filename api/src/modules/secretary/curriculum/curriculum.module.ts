import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/modules/prisma/prisma.module';
import { CreateCurriculumController } from 'src/modules/secretary/curriculum/controllers/create-curriculum.controller';
import { CurriculumRepository } from 'src/modules/secretary/curriculum/repositories/curriculum.prisma.repository';
import { CreateCurriculumService } from 'src/modules/secretary/curriculum/services/create-curriculum.service';

@Module({
  imports: [PrismaModule],
  providers: [CreateCurriculumService, CurriculumRepository],
  controllers: [CreateCurriculumController],
  exports: [],
})
export class CurriculumModule {}
