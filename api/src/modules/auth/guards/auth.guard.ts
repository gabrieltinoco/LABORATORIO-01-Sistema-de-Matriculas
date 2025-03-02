/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { TokenValidator } from 'src/modules/auth/validators/token.validator';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | never {
    const request = context.switchToHttp().getRequest();
    const authorizationHeader = request.headers.authorization as
      | string
      | undefined;
    const token = authorizationHeader?.split(' ')[1];

    if (!token) {
      throw new Error('No token provided');
    }

    try {
      const decoded = TokenValidator.validate(token);
      request.user = decoded;
      return true;
    } catch {
      throw new Error('Unauthorized');
    }
  }
}
