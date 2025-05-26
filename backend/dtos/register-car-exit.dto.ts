import { IsNotEmpty, IsString } from "class-validator";


export class RegisterCarExitDto{

    @IsString()
    @IsNotEmpty()
    plateNumber:string

    @IsString()
    @IsNotEmpty()
    parkingCode:string;

    @IsString()
    @IsNotEmpty()
    entryDateTime:string;
     @IsString()
    @IsNotEmpty()
    exitDateTime:string;
}