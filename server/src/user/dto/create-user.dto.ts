import {IsEmail, Min, MinLength} from "class-validator";

export class CreateUserDto {

    @IsEmail()
    email:string;

    @MinLength(6, {message:" password length must be at least 6 characters"})
    password:string;
}
