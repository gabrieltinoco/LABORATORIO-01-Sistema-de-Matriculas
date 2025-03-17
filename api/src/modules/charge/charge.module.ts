import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/modules/prisma/prisma.module';
import { ChargeRepository } from 'src/modules/charge/repositories/charge.prisma.repository';
import { CreateChargeService } from 'src/modules/charge/services/create-charge.service';
import { EditChargeService } from 'src/modules/charge/services/edit-charge.service';
import { RemoveChargeService } from 'src/modules/charge/services/remove-charge.service';
import { ReadChargeService } from 'src/modules/charge/services/read-charge.service';
import { UserChargeService } from 'src/modules/charge/services/user-charge.service';

@Module({
  imports: [PrismaModule],
  providers: [
    CreateChargeService,
    RemoveChargeService,
    EditChargeService,
    ChargeRepository,
    ReadChargeService,
    UserChargeService,
  ],
  controllers: [],
  exports: [
    CreateChargeService,
    RemoveChargeService,
    EditChargeService,
    ReadChargeService,
    UserChargeService,
  ],
})
export class ChargeModule {}
