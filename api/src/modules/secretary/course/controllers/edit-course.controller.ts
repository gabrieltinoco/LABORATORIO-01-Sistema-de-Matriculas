import { Body, Controller, Param, Put, UseGuards } from '@nestjs/common';
import { Course } from '@prisma/client';
import { Roles } from 'src/modules/auth/decorators/roles.decorator';
import { Role } from 'src/modules/auth/enums/role.enum';
import { AuthGuard } from 'src/modules/auth/guards/auth.guard';
import { RolesGuard } from 'src/modules/auth/guards/roles.guard';
import { EditCourseRequestDTO } from 'src/modules/secretary/course/dtos/request/edit-course.request.dto';
import { EditCourseService } from 'src/modules/secretary/course/services/edit-course.service';

@Controller('secretary/courses/:id')
export class EditCourseController {
  constructor(private readonly service: EditCourseService) {}

  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.Manager)
  @Put()
  async create(
    @Param('id') id: string,
    @Body() body: EditCourseRequestDTO,
  ): Promise<Course> {
    return this.service.execute(id, body);
  }
}
