import { Injectable } from '@nestjs/common';
import { Discipline } from '@prisma/client';
import { DisciplineRepository } from 'src/modules/secretary/discipline/repositories/discipline.prisma.repository';

@Injectable()
export class ReadDisciplineService {
  constructor(private readonly repository: DisciplineRepository) {}

  async execute(id: string): Promise<Discipline | null> {
    return this.repository.findById(id);
  }
}
