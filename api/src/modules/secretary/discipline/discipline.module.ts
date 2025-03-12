import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/modules/prisma/prisma.module';
import { CreateDisciplineController } from 'src/modules/secretary/discipline/controllers/create-discipline.controller';
import { DisciplineRepository } from 'src/modules/secretary/discipline/repositories/discipline.prisma.repository';
import { CreateDisciplineService } from 'src/modules/secretary/discipline/services/create-discipline.service';

@Module({
  imports: [PrismaModule],
  providers: [DisciplineRepository, CreateDisciplineService],
  controllers: [CreateDisciplineController],
  exports: [],
})
export class DisciplineModule {}
