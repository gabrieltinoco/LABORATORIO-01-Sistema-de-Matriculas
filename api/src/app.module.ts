import { Module } from '@nestjs/common';
import { UseCasesModule } from 'src/modules/application/use-cases/use-cases.module';
import { AuthModule } from 'src/modules/auth/auth.module';
import { ChargeModule } from 'src/modules/charge/charge.module';
import { EnrollmentModule } from 'src/modules/enrollment/enrollment.module';
import { NotificationModule } from 'src/modules/notification/notification.module';
import { SecretaryModule } from 'src/modules/secretary/secretary.module';

@Module({
  imports: [
    AuthModule,
    SecretaryModule,
    ChargeModule,
    NotificationModule,
    EnrollmentModule,
    UseCasesModule,
  ],
})
export class AppModule {}
