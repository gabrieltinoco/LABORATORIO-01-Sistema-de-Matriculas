import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { Notification } from '@prisma/client';
import { DisciplineEnrollmentRequestDto } from 'src/modules/application/use-cases/student/dtos/request/discipline-enrollment.request.dto';
import { DisciplineEnrollmentService } from 'src/modules/application/use-cases/student/services/discipline-enrollment.service';
import { Roles } from 'src/modules/auth/decorators/roles.decorator';
import { Role } from 'src/modules/auth/enums/role.enum';
import { AuthGuard } from 'src/modules/auth/guards/auth.guard';
import { RolesGuard } from 'src/modules/auth/guards/roles.guard';

@Controller('enrollment/')
export class DisciplineEnrollmentController {
  constructor(private readonly service: DisciplineEnrollmentService) {}

  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.Student)
  @Post()
  async notify(
    @Body() data: DisciplineEnrollmentRequestDto,
  ): Promise<Notification> {
    return this.service.execute(data);
  }
}
