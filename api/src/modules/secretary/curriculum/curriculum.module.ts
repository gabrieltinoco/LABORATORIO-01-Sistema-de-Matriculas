import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/modules/prisma/prisma.module';
import { CreateCurriculumController } from 'src/modules/secretary/curriculum/controllers/create-curriculum.controller';
import { EditCurriculumController } from 'src/modules/secretary/curriculum/controllers/edit-curriculum.controller';
import { RemoveCurriculumController } from 'src/modules/secretary/curriculum/controllers/remove-curriculum.controller';
import { CurriculumRepository } from 'src/modules/secretary/curriculum/repositories/curriculum.prisma.repository';
import { CreateCurriculumService } from 'src/modules/secretary/curriculum/services/create-curriculum.service';
import { RemoveCurriculumService } from 'src/modules/secretary/curriculum/services/remove-curriculum.service';
import { EditCurriculumService } from 'src/modules/secretary/curriculum/services/update-curriculum.service';

@Module({
  imports: [PrismaModule],
  providers: [
    CreateCurriculumService,
    CurriculumRepository,
    RemoveCurriculumService,
    EditCurriculumService,
  ],
  controllers: [
    CreateCurriculumController,
    RemoveCurriculumController,
    EditCurriculumController,
  ],
  exports: [],
})
export class CurriculumModule {}
