import { Injectable } from '@nestjs/common';
import { Charge } from '@prisma/client';
import { ChargeRepository } from 'src/modules/charge/repositories/charge.prisma.repository';

@Injectable()
export class ReadChargeService {
  constructor(private readonly repository: ChargeRepository) {}

  async execute(id: string): Promise<Charge | null> {
    return this.repository.findById(id);
  }
}
