import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { Roles } from 'src/modules/auth/decorators/roles.decorator';
import { Role } from 'src/modules/auth/enums/role.enum';
import { CreateCurriculumRequestDTO } from 'src/modules/secretary/curriculum/dtos/request/create-curriculum.request.dto';
import { AuthGuard } from 'src/modules/auth/guards/auth.guard';
import { RolesGuard } from 'src/modules/auth/guards/roles.guard';
import { CreateCurriculumService } from 'src/modules/secretary/curriculum/services/create-curriculum.service';
import { Curriculum } from '@prisma/client';

@Controller('secretary/curriculums')
export class CreateCurriculumController {
  constructor(private readonly service: CreateCurriculumService) {}

  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.Manager)
  @Post()
  async create(@Body() body: CreateCurriculumRequestDTO): Promise<Curriculum> {
    return this.service.execute(body);
  }
}
