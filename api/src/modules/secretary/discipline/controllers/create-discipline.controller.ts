import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { Roles } from 'src/modules/auth/decorators/roles.decorator';
import { Role } from 'src/modules/auth/enums/role.enum';
import { AuthGuard } from 'src/modules/auth/guards/auth.guard';
import { RolesGuard } from 'src/modules/auth/guards/roles.guard';
import { CreateCurriculumResponseDTO } from 'src/modules/secretary/curriculum/dtos/response/create-curriculum.response.dto';
import { CreateDisciplineRequestDTO } from 'src/modules/secretary/discipline/dtos/request/create-discipline.request.dto';
import { CreateDisciplineService } from 'src/modules/secretary/discipline/services/create-discipline.service';

@Controller('secretary/discipline')
export class CreateDisciplineController {
  constructor(private readonly service: CreateDisciplineService) {}

  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.Manager)
  @Post()
  async create(
    @Body() body: CreateDisciplineRequestDTO,
  ): Promise<CreateCurriculumResponseDTO> {
    return this.service.execute(body);
  }
}
