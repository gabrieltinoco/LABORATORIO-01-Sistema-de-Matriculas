import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ProcessStudentChargeService } from 'src/modules/application/use-cases/charge/services/process-student-charge.service';
import { Roles } from 'src/modules/auth/decorators/roles.decorator';
import { Role } from 'src/modules/auth/enums/role.enum';
import { AuthGuard } from 'src/modules/auth/guards/auth.guard';
import { RolesGuard } from 'src/modules/auth/guards/roles.guard';

@Controller('charge/process-student-charges/:id')
export class ProcessStudentChargeController {
  constructor(private readonly service: ProcessStudentChargeService) {}

  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.Manager)
  @Get()
  async notify(@Param('id') id: string): Promise<any> {
    return this.service.execute(id);
  }
}
