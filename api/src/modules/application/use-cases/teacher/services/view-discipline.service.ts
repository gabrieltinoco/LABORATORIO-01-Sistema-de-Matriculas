import { Injectable } from '@nestjs/common';
import { Discipline } from '@prisma/client';
import { ReadDisciplineService } from 'src/modules/secretary/discipline/services/read-discipline.service';

@Injectable()
export class ViewDisciplineService {
  constructor(private readonly service: ReadDisciplineService) {}
  async execute(id: string): Promise<Discipline> {
    const discipline = await this.service.execute(id);

    if (!discipline) {
      throw new Error('Discipline not found');
    }

    return discipline;
  }
}
