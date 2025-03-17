import { Injectable } from '@nestjs/common';
import { DisciplineRepository } from 'src/modules/secretary/discipline/repositories/discipline.prisma.repository';

@Injectable()
export class RemoveDisciplineService {
  constructor(private readonly repository: DisciplineRepository) {}

  async execute(id: string): Promise<void> {
    return this.repository.delete(id);
  }
}
