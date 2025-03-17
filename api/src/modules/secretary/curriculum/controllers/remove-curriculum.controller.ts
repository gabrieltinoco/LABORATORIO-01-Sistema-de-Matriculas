import { Controller, UseGuards, Param, Delete } from '@nestjs/common';
import { Roles } from 'src/modules/auth/decorators/roles.decorator';
import { Role } from 'src/modules/auth/enums/role.enum';
import { AuthGuard } from 'src/modules/auth/guards/auth.guard';
import { RolesGuard } from 'src/modules/auth/guards/roles.guard';
import { RemoveCurriculumService } from 'src/modules/secretary/curriculum/services/remove-curriculum.service';

@Controller('secretary/curriculums/:id')
export class RemoveCurriculumController {
  constructor(private readonly service: RemoveCurriculumService) {}

  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.Manager)
  @Delete()
  async remove(@Param('id') id: string): Promise<void> {
    return this.service.execute(id);
  }
}
