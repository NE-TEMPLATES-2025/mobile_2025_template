import { IsEmail } from "class-validator";

export class InitiateAccountVerificationDto{
    
    @IsEmail()
    email:string;
    
}