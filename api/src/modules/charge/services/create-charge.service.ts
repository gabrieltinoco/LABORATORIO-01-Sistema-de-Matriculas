import { Injectable } from '@nestjs/common';
import { Charge } from '@prisma/client';
import { CreateChargeRequestDTO } from 'src/modules/charge/dtos/request/create-charge.request.dto';
import { ChargeRepository } from 'src/modules/charge/repositories/charge.prisma.repository';

@Injectable()
export class CreateChargeService {
  constructor(private readonly repository: ChargeRepository) {}

  async execute({
    amount,
    userId,
    paymentMethod,
    expiration,
  }: CreateChargeRequestDTO): Promise<Charge> {
    return this.repository.create(amount, userId, paymentMethod, expiration);
  }
}
