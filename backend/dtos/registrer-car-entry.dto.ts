import { IsNotEmpty, IsString } from "class-validator";


export class RegisterCarEntryDto{

    @IsString()
    @IsNotEmpty()
    plateNumber:string

    @IsString()
    @IsNotEmpty()
    parkingCode:string;

    @IsString()
    @IsNotEmpty()
    entryDateTime:string;


}