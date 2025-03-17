import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/modules/prisma/prisma.module';
import { EnrollmentRepository } from 'src/modules/enrollment/repositories/enrollment.prisma.repository';
import { CreateEnrollmentService } from 'src/modules/enrollment/services/create-enrollment.service';
import { RemoveEnrollmentService } from 'src/modules/enrollment/services/remove-enrollment.service';
import { EditEnrollmentService } from 'src/modules/enrollment/services/edit-enrollment.service';
import { FindEnrollmentService } from 'src/modules/enrollment/services/find-enrollment.service';
import { FindByDisciplineIdEnrollmentService } from 'src/modules/enrollment/services/find-by-discipline-id-enrollment.service';

@Module({
  imports: [PrismaModule],
  providers: [
    EnrollmentRepository,
    CreateEnrollmentService,
    RemoveEnrollmentService,
    EditEnrollmentService,
    FindEnrollmentService,
    FindByDisciplineIdEnrollmentService,
  ],
  controllers: [],
  exports: [
    EnrollmentRepository,
    CreateEnrollmentService,
    RemoveEnrollmentService,
    EditEnrollmentService,
    FindEnrollmentService,
    FindByDisciplineIdEnrollmentService,
  ],
})
export class EnrollmentModule {}
