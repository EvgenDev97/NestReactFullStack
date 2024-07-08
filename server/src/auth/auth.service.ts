import {BadRequestException, Injectable} from '@nestjs/common';
import {UserService} from "../user/user.service";
import * as argon2 from "argon2";

@Injectable()
export class AuthService {
  constructor( private userService: UserService ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findOne(email);
    const passwordIsMatch = await argon2.verify(password, user.password);
    if (user && passwordIsMatch) {
      return user;
    }
    throw new BadRequestException('Invalid email or password');
  }
}
