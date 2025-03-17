import { Injectable } from '@nestjs/common';
import { Discipline } from '@prisma/client';
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
  ): Promise<Discipline> {
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
    });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.discipline.delete({
      where: {
        id,
      },
    });
  }

  async edit(
    id: string,
    courseId: string,
    credits: number,
    description: string,
    name: string,
    price: number,
    semester: number,
    curriculumId: string,
    professorId: string,
  ): Promise<Discipline> {
    return this.prisma.discipline.update({
      where: {
        id,
      },
      data: {
        courseId,
        credits,
        description,
        name,
        price,
        semester,
        curriculumId,
        professorId,
      },
    });
  }

  async findById(id: string): Promise<Discipline | null> {
    return this.prisma.discipline.findUnique({
      where: {
        id,
      },
    });
  }
}
