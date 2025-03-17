import { Injectable } from '@nestjs/common';
import { Course } from '@prisma/client';
import { PrismaService } from 'src/modules/prisma/prisma.service';

@Injectable()
export class CourseRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    name: string,
    description: string,
    credits: number,
    curriculumId: string,
  ): Promise<Course> {
    return this.prisma.course.create({
      data: {
        name: name,
        description: description,
        credits: credits,
        curriculumId: curriculumId,
      },
    });
  }

  async remove(id: string): Promise<void> {
    await this.prisma.course.delete({
      where: {
        id: id,
      },
    });
  }

  async edit(
    id: string,
    name: string,
    description: string,
    credits: number,
    curriculumId: string,
  ): Promise<Course> {
    return this.prisma.course.update({
      where: {
        id: id,
      },
      data: {
        name: name,
        description: description,
        credits: credits,
        curriculumId: curriculumId,
      },
    });
  }
}
