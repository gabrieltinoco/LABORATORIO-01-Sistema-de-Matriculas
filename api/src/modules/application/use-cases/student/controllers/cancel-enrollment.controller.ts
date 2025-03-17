import { Body, Controller, Put, UseGuards } from '@nestjs/common';
import { CancelEnrollmentRequestDto } from 'src/modules/application/use-cases/student/dtos/request/cancel-enrollment.request.dto';
import { CancelEnrollmentService } from 'src/modules/application/use-cases/student/services/cancel-enrollment.service';
import { Roles } from 'src/modules/auth/decorators/roles.decorator';
import { Role } from 'src/modules/auth/enums/role.enum';
import { AuthGuard } from 'src/modules/auth/guards/auth.guard';
import { RolesGuard } from 'src/modules/auth/guards/roles.guard';

@Controller('enrollment/cancel')
export class CancelEnrollmentController {
  constructor(private readonly service: CancelEnrollmentService) {}

  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.Student)
  @Put()
  async notify(@Body() data: CancelEnrollmentRequestDto): Promise<void> {
    return this.service.execute(data);
  }
}
