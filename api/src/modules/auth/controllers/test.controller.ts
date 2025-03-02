import { Controller, Get, UseGuards } from '@nestjs/common';
import { Roles } from 'src/modules/auth/decorators/roles.decorator';
import { Role } from 'src/modules/auth/enums/role.enum';
import { AuthGuard } from 'src/modules/auth/guards/auth.guard';
import { RolesGuard } from 'src/modules/auth/guards/roles.guard';

@Controller('/test')
export class TestController {
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.Manager)
  @Get()
  test() {
    return 'Hello, World';
  }
}
