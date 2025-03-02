import { Body, Controller, Post } from '@nestjs/common';
import { RegisterService } from '../services/register.service';
import { CreateUserDTO } from 'src/modules/auth/dto/request/create-user.dto';

@Controller()
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

  @Post('/auth/register')
  async register(@Body() { password, email, role, name }: CreateUserDTO) {
    return this.registerService.execute(email, password, role, name);
  }
}
