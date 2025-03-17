import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/modules/prisma/prisma.module';
import { CreateDisciplineController } from 'src/modules/secretary/discipline/controllers/create-discipline.controller';
import { EditDisciplineController } from 'src/modules/secretary/discipline/controllers/edit-discipline.controller';
import { DisciplineRepository } from 'src/modules/secretary/discipline/repositories/discipline.prisma.repository';
import { CreateDisciplineService } from 'src/modules/secretary/discipline/services/create-discipline.service';
import { RemoveDisciplineService } from './services/remove-discipline.service';
import { RemoveDisciplineController } from 'src/modules/secretary/discipline/controllers/remove-discipline.controller';
import { EditDisciplineService } from 'src/modules/secretary/discipline/services/edit-discipline.service';
import { ReadDisciplineService } from 'src/modules/secretary/discipline/services/read-discipline.service';

@Module({
  imports: [PrismaModule],
  providers: [
    CreateDisciplineService,
    RemoveDisciplineService,
    DisciplineRepository,
    EditDisciplineService,
    ReadDisciplineService,
  ],
  controllers: [
    CreateDisciplineController,
    EditDisciplineController,
    RemoveDisciplineController,
  ],
  exports: [
    CreateDisciplineService,
    RemoveDisciplineService,
    EditDisciplineService,
    ReadDisciplineService,
  ],
})
export class DisciplineModule {}
