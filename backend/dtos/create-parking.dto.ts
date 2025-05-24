import { IsNotEmpty, IsString } from "class-validator";

export class CreateParkingDto{
    
    @IsString()
    @IsNotEmpty()
    code:string;

    @IsString()
    @IsNotEmpty()
    parkingName:string;

    @IsNotEmpty()
    availableSpaces:number;

    @IsString()
    @IsNotEmpty()
    location:string;

    @IsNotEmpty()
    chargingFeePerHour:number;

    @IsString()
    @IsNotEmpty()
    userId:string


}