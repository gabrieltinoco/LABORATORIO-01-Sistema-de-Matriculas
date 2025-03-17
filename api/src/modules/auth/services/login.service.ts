import { Injectable } from '@nestjs/common';
import { AuthRepository } from '../repositories/auth.prisma.repository';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';
import { UserTokenDTO } from 'src/modules/auth/dtos/response/user-token.dto';

@Injectable()
export class LoginService {
  constructor(private readonly authRepository: AuthRepository) {}

  public async execute(
    email: string,
    password: string,
  ): Promise<UserTokenDTO> | never {
    const finded = await this.authRepository.findByEmail(email);
    if (!finded) {
      throw new Error('User not found');
    }

    try {
      await bcrypt.compare(password, finded.password);
    } catch {
      throw new Error('Invalid password');
    }

    if (process.env.JWT_SECRET === undefined) {
      throw new Error('JWT_SECRET not defined');
    }

    const token = jwt.sign(
      { id: finded.id, role: finded.role },
      process.env.JWT_SECRET,
      {
        expiresIn: '1d',
      },
    );

    return { token };
  }
}
