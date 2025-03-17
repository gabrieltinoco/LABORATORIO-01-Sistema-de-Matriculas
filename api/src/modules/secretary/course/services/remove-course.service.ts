import { Injectable } from '@nestjs/common';
import { CourseRepository } from 'src/modules/secretary/course/repositories/course.prisma.repository';

@Injectable()
export class RemoveCourseService {
  constructor(private readonly repository: CourseRepository) {}

  async execute(id: string): Promise<void> {
    return this.repository.remove(id);
  }
}
