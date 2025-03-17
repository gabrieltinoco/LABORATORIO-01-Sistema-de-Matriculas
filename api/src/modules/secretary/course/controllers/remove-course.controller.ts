import { Controller, UseGuards, Param, Delete } from '@nestjs/common';
import { Roles } from 'src/modules/auth/decorators/roles.decorator';
import { Role } from 'src/modules/auth/enums/role.enum';
import { AuthGuard } from 'src/modules/auth/guards/auth.guard';
import { RolesGuard } from 'src/modules/auth/guards/roles.guard';
import { RemoveCourseService } from 'src/modules/secretary/course/services/remove-course.service';

@Controller('secretary/courses/:id')
export class RemoveCourseController {
  constructor(private readonly service: RemoveCourseService) {}

  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.Manager)
  @Delete()
  async remove(@Param('id') id: string): Promise<void> {
    return this.service.execute(id);
  }
}
