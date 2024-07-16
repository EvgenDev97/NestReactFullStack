import {HttpException, HttpStatus, Injectable, UnauthorizedException} from '@nestjs/common';
import {UserService} from "../user/user.service";
import * as argon2 from "argon2";
import {JwtService} from "@nestjs/jwt";
import {IUser} from "../types/types";

@Injectable()
export class AuthService {
  constructor( private userService: UserService, private jwtService: JwtService ) {}
 //login
  async validateUser(email: string, password: string) {
    const user = await this.userService.findOne(email);
    let passwordIsMatch
    if(user){
      passwordIsMatch = await argon2.verify(user.password, password);
    }else{
      throw new UnauthorizedException("the email was not match");
    }
    if (user && passwordIsMatch) {
      return user;
    }
    throw new UnauthorizedException('Invalid email or password ');
  }

  async login(user: IUser) {
    const {id, email} = user
    return {
      id,
      email,
      token:this.jwtService.sign({id:user.id, email:user.email}),
    };
  }
}
