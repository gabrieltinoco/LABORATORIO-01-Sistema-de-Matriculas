import { Injectable } from '@nestjs/common';
import { Curriculum } from '@prisma/client';
import { PrismaService } from 'src/modules/prisma/prisma.service';

@Injectable()
export class CurriculumRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(name: string, description: string): Promise<Curriculum> {
    return this.prisma.curriculum.create({
      data: {
        name: name,
        description: description,
      },
    });
  }

  async remove(id: string): Promise<void> {
    await this.prisma.curriculum.delete({
      where: {
        id: id,
      },
    });
  }

  async edit(
    id: string,
    name: string,
    description: string,
  ): Promise<Curriculum> {
    return this.prisma.curriculum.update({
      where: {
        id: id,
      },
      data: {
        name: name,
        description: description,
      },
    });
  }
}
