import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma/prisma.service';

@Injectable()
export class DisciplineRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    courseId: string,
    credits: number,
    description: string,
    name: string,
    price: number,
    semester: number,
    curriculumId: string,
    professorId: string,
  ): Promise<{
    id: string;
    name: string;
    description: string;
    credits: number;
    price: number;
    semester: number;
  }> {
    return this.prisma.discipline.create({
      data: {
        credits,
        description,
        name,
        price,
        semester,
        courseId,
        professorId,
        curriculumId,
      },
      select: {
        id: true,
        credits: true,
        description: true,
        name: true,
        price: true,
        semester: true,
      },
    });
  }
}
