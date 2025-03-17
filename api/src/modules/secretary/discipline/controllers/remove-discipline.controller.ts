import { Controller, UseGuards, Param, Delete } from '@nestjs/common';
import { Roles } from 'src/modules/auth/decorators/roles.decorator';
import { Role } from 'src/modules/auth/enums/role.enum';
import { AuthGuard } from 'src/modules/auth/guards/auth.guard';
import { RolesGuard } from 'src/modules/auth/guards/roles.guard';
import { RemoveDisciplineService } from 'src/modules/secretary/discipline/services/remove-discipline.service';

@Controller('secretary/disciplines/:id')
export class RemoveDisciplineController {
  constructor(private readonly service: RemoveDisciplineService) {}

  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.Manager)
  @Delete()
  async remove(@Param('id') id: string): Promise<void> {
    return this.service.execute(id);
  }
}
