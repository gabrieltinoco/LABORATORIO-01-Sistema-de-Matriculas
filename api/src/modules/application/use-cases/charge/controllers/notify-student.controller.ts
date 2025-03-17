import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { NotifyStudentRequestDTO } from 'src/modules/application/use-cases/charge/dtos/request/notify-student.request.dto';
import { NotifyStudentService } from 'src/modules/application/use-cases/charge/services/notify-student.service';
import { Roles } from 'src/modules/auth/decorators/roles.decorator';
import { Role } from 'src/modules/auth/enums/role.enum';
import { AuthGuard } from 'src/modules/auth/guards/auth.guard';
import { RolesGuard } from 'src/modules/auth/guards/roles.guard';

@Controller('charge/notify-student')
export class NotifyStudentController {
  constructor(private readonly service: NotifyStudentService) {}

  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.Manager)
  @Post()
  async notify(@Body() data: NotifyStudentRequestDTO): Promise<any> {
    return this.service.execute(data);
  }
}
