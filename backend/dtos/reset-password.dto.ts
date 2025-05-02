import { IsEmail, IsNotEmpty, IsString, Matches } from "class-validator";


export class ResetPasswordDto{
    
    @IsString()
    @IsNotEmpty()
    resetCode: string;

    @IsEmail()
    @IsString()
    email: string;

    @IsString()
    @Matches(/^(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/, {
            message: 'Password must have at least 8 characters, one symbol, one number, and one uppercase letter.',
        })
        @IsNotEmpty()
    newPassword: string;

}