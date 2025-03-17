import { Injectable } from '@nestjs/common';
import { Enrollment } from '@prisma/client';
import { PrismaService } from 'src/modules/prisma/prisma.service';

@Injectable()
export class EnrollmentRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(userId: string, disciplineId: string): Promise<Enrollment> {
    return this.prisma.enrollment.create({
      data: {
        userId,
        disciplineId,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.enrollment.delete({
      where: {
        id,
      },
    });
  }

  async edit(id: string, data: Partial<Enrollment>): Promise<Enrollment> {
    return this.prisma.enrollment.update({
      where: {
        id,
      },
      data,
    });
  }

  async findBy(
    userId: string,
    disciplineId: string,
  ): Promise<Enrollment | null> {
    return this.prisma.enrollment.findFirst({
      where: {
        userId,
        disciplineId,
      },
    });
  }

  async findManyByDisciplineId(
    disciplineId: string,
  ): Promise<Enrollment[] | null> {
    return this.prisma.enrollment.findMany({
      where: {
        disciplineId,
      },
      include: {
        user: true,
      },
    });
  }
}
