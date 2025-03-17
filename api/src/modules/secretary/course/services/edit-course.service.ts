import { Injectable } from '@nestjs/common';
import { EditCourseRequestDTO } from '../dtos/request/edit-course.request.dto';
import { CourseRepository } from 'src/modules/secretary/course/repositories/course.prisma.repository';
import { Course } from '@prisma/client';

@Injectable()
export class EditCourseService {
  constructor(private readonly repository: CourseRepository) {}

  async execute(
    id: string,
    { credits, curriculumId, description, name }: EditCourseRequestDTO,
  ): Promise<Course> {
    return this.repository.edit(id, name, description, credits, curriculumId);
  }
}
