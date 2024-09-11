import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthenticationService {
  constructor(private userService: UserService) {
  }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userService.viewUser(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
