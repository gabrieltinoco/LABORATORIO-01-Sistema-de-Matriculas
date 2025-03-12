import { Role } from 'src/modules/auth/enums/role.enum';

export class CreateUserDTO {
  email: string;
  name: string;
  password: string;
  role: Role;
}
