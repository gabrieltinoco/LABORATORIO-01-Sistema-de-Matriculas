import { Injectable } from '@nestjs/common';
import { Role } from 'src/modules/auth/enums/role.enum';
import { PrismaService } from 'src/modules/prisma/prisma.service';

@Injectable()
export class AuthRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(email: string, password: string, role: string, name: string) {
    return this.prisma.user.create({
      data: {
        email,
        password,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        role: Role[role],
        name,
      },
    });
  }

  async findByEmail(email: string) {
    return this.prisma.user.findFirst({
      where: {
        email,
      },
    });
  }

  async findById(id: string) {
    return this.prisma.user.findFirst({
      where: {
        id,
      },
    });
  }
}
