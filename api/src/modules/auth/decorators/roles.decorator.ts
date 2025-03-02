import { SetMetadata } from '@nestjs/common';
import { Role } from 'src/modules/auth/enums/role.enum';

export const ROLES_KEY = 'roles';

// O decorator agora aceita roles do enum Role
export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);
