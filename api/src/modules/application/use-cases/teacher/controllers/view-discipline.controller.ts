import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { Discipline } from '@prisma/client';
import { ViewDisciplineService } from 'src/modules/application/use-cases/teacher/services/view-discipline.service';
import { Roles } from 'src/modules/auth/decorators/roles.decorator';
import { Role } from 'src/modules/auth/enums/role.enum';
import { AuthGuard } from 'src/modules/auth/guards/auth.guard';
import { RolesGuard } from 'src/modules/auth/guards/roles.guard';

@Controller('disciplines/')
export class ViewDisciplineController {
  constructor(private readonly service: ViewDisciplineService) {}

  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.Teacher)
  @Get(':id')
  async notify(@Param('id') id: string): Promise<Discipline> {
    return this.service.execute(id);
  }
}
