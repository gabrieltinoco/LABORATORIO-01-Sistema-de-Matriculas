import { Body, Controller, Param, Put, UseGuards } from '@nestjs/common';
import { Curriculum } from '@prisma/client';
import { Roles } from 'src/modules/auth/decorators/roles.decorator';
import { Role } from 'src/modules/auth/enums/role.enum';
import { AuthGuard } from 'src/modules/auth/guards/auth.guard';
import { RolesGuard } from 'src/modules/auth/guards/roles.guard';
import { EditCurriculumRequestDTO } from 'src/modules/secretary/curriculum/dtos/request/edit-curriculum.request.dto';
import { EditCurriculumService } from 'src/modules/secretary/curriculum/services/update-curriculum.service';

@Controller('secretary/curriculums/:id')
export class EditCurriculumController {
  constructor(private readonly service: EditCurriculumService) {}

  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.Manager)
  @Put()
  async create(
    @Param('id') id: string,
    @Body() body: EditCurriculumRequestDTO,
  ): Promise<Curriculum> {
    return this.service.execute(id, body);
  }
}
