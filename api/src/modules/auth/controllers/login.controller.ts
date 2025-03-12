import { Body, Controller, Post } from '@nestjs/common';
import { LoginService } from '../services/login.service';
import { LoginDTO } from 'src/modules/auth/dtos/request/login.dto';

@Controller()
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post('/auth/login')
  async login(@Body() { password, email }: LoginDTO) {
    return this.loginService.execute(email, password);
  }
}
