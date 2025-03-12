import { Module } from '@nestjs/common';
import { AuthModule } from 'src/modules/auth/auth.module';
import { SecretaryModule } from 'src/modules/secretary/secretary.module';

@Module({
  imports: [AuthModule, SecretaryModule],
})
export class AppModule {}
