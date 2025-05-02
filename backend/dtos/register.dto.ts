import { IsEmail, IsNotEmpty, IsString, Min } from "class-validator";


export class RegisterDto{
    
    @IsString()
    @Min(3,{message:"Firstname must be of minimum 3 characters"})
    @IsNotEmpty({message:"Field is required"})
    firstName: string;

    @IsString()
    @Min(3,{message:"Firstname must be of minimum 3 characters"})
    @IsNotEmpty({message:"Field is required"})
    lastName:string;

    @IsString()
    @IsNotEmpty({message:"Field is required"})
    @IsEmail()
    email: string;

    @IsString()
    @Min(3,{message:"Firstname must be of minimum 3 characters"})
    @IsNotEmpty({message:"Field is required"})
    password: string;
}