import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { Discipline } from '@prisma/client';
import { Roles } from 'src/modules/auth/decorators/roles.decorator';
import { Role } from 'src/modules/auth/enums/role.enum';
import { AuthGuard } from 'src/modules/auth/guards/auth.guard';
import { RolesGuard } from 'src/modules/auth/guards/roles.guard';
import { CreateDisciplineRequestDTO } from 'src/modules/secretary/discipline/dtos/request/create-discipline.request.dto';
import { CreateDisciplineService } from 'src/modules/secretary/discipline/services/create-discipline.service';

@Controller('secretary/disciplines')
export class CreateDisciplineController {
  constructor(private readonly service: CreateDisciplineService) {}

  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.Manager)
  @Post()
  async create(@Body() body: CreateDisciplineRequestDTO): Promise<Discipline> {
    return this.service.execute(body);
  }
}
