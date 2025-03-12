import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma/prisma.service';

@Injectable()
export class CurriculumRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    name: string,
    description: string,
  ): Promise<{
    id: string;
    name: string;
    description: string;
  }> {
    return this.prisma.curriculum.create({
      data: {
        name: name,
        description: description,
      },
      select: {
        id: true,
        name: true,
        description: true,
      },
    });
  }
}
