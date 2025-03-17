import { Injectable } from '@nestjs/common';
import { Course } from '@prisma/client';
import { CreateCourseRequestDTO } from 'src/modules/secretary/course/dtos/request/create-course.request.dto';
import { CourseRepository } from 'src/modules/secretary/course/repositories/course.prisma.repository';

@Injectable()
export class CreateCourseService {
  constructor(private readonly repository: CourseRepository) {}

  async execute({
    credits,
    curriculumId,
    description,
    name,
  }: CreateCourseRequestDTO): Promise<Course> {
    return this.repository.create(name, description, credits, curriculumId);
  }
}
