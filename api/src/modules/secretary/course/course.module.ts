import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/modules/prisma/prisma.module';
import { CourseRepository } from 'src/modules/secretary/course/repositories/course.prisma.repository';
import { CreateCourseService } from 'src/modules/secretary/course/services/create-course.service';
import { RemoveCourseService } from 'src/modules/secretary/course/services/remove-course.service';
import { EditCourseService } from 'src/modules/secretary/course/services/edit-course.service';
import { CreateCourseController } from 'src/modules/secretary/course/controllers/create-course.controller';
import { EditCourseController } from 'src/modules/secretary/course/controllers/edit-course.controller';
import { RemoveCourseController } from 'src/modules/secretary/course/controllers/remove-course.controller';

@Module({
  imports: [PrismaModule],
  providers: [
    CourseRepository,
    CreateCourseService,
    RemoveCourseService,
    EditCourseService,
  ],
  controllers: [
    CreateCourseController,
    EditCourseController,
    RemoveCourseController,
  ],
  exports: [],
})
export class CourseModule {}
