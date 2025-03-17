import { Injectable } from '@nestjs/common';
import { CurriculumRepository } from 'src/modules/secretary/curriculum/repositories/curriculum.prisma.repository';

@Injectable()
export class RemoveCurriculumService {
  constructor(private readonly repository: CurriculumRepository) {}

  async execute(id: string): Promise<void> {
    return this.repository.remove(id);
  }
}
