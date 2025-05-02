import { IsEmail } from "class-validator";

export class InitiateResetPasswordDto{
    
    @IsEmail()
    email: string

    
}