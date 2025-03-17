import { Injectable } from '@nestjs/common';
import { Charge } from '@prisma/client';
import { EditChargeRequestDTO } from 'src/modules/charge/dtos/request/edit-charge.request.dto';
import { ChargeRepository } from 'src/modules/charge/repositories/charge.prisma.repository';

@Injectable()
export class EditChargeService {
  constructor(private readonly repository: ChargeRepository) {}

  async execute(
    id: string,
    { amount, userId, paid, paymentMethod, expiration }: EditChargeRequestDTO,
  ): Promise<Charge> {
    return this.repository.edit(
      id,
      amount,
      userId,
      paid,
      paymentMethod,
      expiration,
    );
  }
}
