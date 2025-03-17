import { Controller, Param, Post, UseGuards } from '@nestjs/common';
import { ViewStudentsService } from 'src/modules/application/use-cases/teacher/services/view-students.service';
import { Roles } from 'src/modules/auth/decorators/roles.decorator';
import { Role } from 'src/modules/auth/enums/role.enum';
import { AuthGuard } from 'src/modules/auth/guards/auth.guard';
import { RolesGuard } from 'src/modules/auth/guards/roles.guard';

@Controller('disciplines/')
export class ViewStudentsController {
  constructor(private readonly service: ViewStudentsService) {}

  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.Teacher)
  @Post(':id/students')
  async notify(@Param('id') id: string): Promise<string[]> {
    return this.service.execute(id);
  }
}
