import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { Roles } from 'src/modules/auth/decorators/roles.decorator';
import { Role } from 'src/modules/auth/enums/role.enum';
import { AuthGuard } from 'src/modules/auth/guards/auth.guard';
import { RolesGuard } from 'src/modules/auth/guards/roles.guard';
import { CreateCourseService } from 'src/modules/secretary/course/services/create-course.service';
import { Course } from '@prisma/client';
import { CreateCourseRequestDTO } from 'src/modules/secretary/course/dtos/request/create-course.request.dto';

@Controller('secretary/courses')
export class CreateCourseController {
  constructor(private readonly service: CreateCourseService) {}

  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.Manager)
  @Post()
  async create(@Body() body: CreateCourseRequestDTO): Promise<Course> {
    return this.service.execute(body);
  }
}
