import { AuthRepository } from 'src/modules/auth/repositories/auth.prisma.repository';
import * as bcrypt from 'bcryptjs';
import { Injectable } from '@nestjs/common';
import { Role } from 'src/modules/auth/enums/role.enum';
import { CreatedUserDTO } from 'src/modules/auth/dto/response/created-user.dto';

@Injectable()
export class RegisterService {
  constructor(private readonly authRepository: AuthRepository) {}

  public async execute(
    email: string,
    password: string,
    role: Role,
    name: string,
  ): Promise<CreatedUserDTO> {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.authRepository.create(
      email,
      hashedPassword,
      role,
      name,
    );

    return { id: user.id };
  }
}
