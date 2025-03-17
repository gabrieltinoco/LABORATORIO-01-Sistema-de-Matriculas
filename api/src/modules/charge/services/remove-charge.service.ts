import { Injectable } from '@nestjs/common';
import { ChargeRepository } from 'src/modules/charge/repositories/charge.prisma.repository';

@Injectable()
export class RemoveChargeService {
  constructor(private readonly repository: ChargeRepository) {}

  async execute(id: string): Promise<void> {
    return this.repository.delete(id);
  }
}
