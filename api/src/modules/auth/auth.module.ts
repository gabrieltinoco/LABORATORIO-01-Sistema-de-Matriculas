import { Module } from '@nestjs/common';
import { LoginController } from 'src/modules/auth/controllers/login.controller';
import { RegisterController } from 'src/modules/auth/controllers/register.controller';
import { TestController } from 'src/modules/auth/controllers/test.controller';
import { AuthRepository } from 'src/modules/auth/repositories/auth.prisma.repository';
import { LoginService } from 'src/modules/auth/services/login.service';
import { RegisterService } from 'src/modules/auth/services/register.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [AuthRepository, LoginService, RegisterService, PrismaService],
  controllers: [LoginController, RegisterController, TestController],
})
export class AuthModule {}
