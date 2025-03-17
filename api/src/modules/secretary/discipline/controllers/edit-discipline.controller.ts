import { Body, Controller, Param, Put, UseGuards } from '@nestjs/common';
import { Curriculum } from '@prisma/client';
import { Roles } from 'src/modules/auth/decorators/roles.decorator';
import { Role } from 'src/modules/auth/enums/role.enum';
import { AuthGuard } from 'src/modules/auth/guards/auth.guard';
import { RolesGuard } from 'src/modules/auth/guards/roles.guard';
import { EditDisciplineRequestDTO } from 'src/modules/secretary/discipline/dtos/request/edit-discipline.request.dto';
import { EditDisciplineService } from 'src/modules/secretary/discipline/services/edit-discipline.service';

@Controller('secretary/disciplines/:id')
export class EditDisciplineController {
  constructor(private readonly service: EditDisciplineService) {}

  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.Manager)
  @Put()
  async create(
    @Param('id') id: string,
    @Body() body: EditDisciplineRequestDTO,
  ): Promise<Curriculum> {
    return this.service.execute(id, body);
  }
}
