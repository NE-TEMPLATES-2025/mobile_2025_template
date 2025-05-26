import { RefObject } from "react";
import { ButtonProps, TextInput, TextInputProps } from "react-native";


export interface CustomButtonProps extends ButtonProps {
    containerStyle: string;
    iconRight?: any;
    textStyle?: any;
    backgroundColor? : string;
}

export interface OAuthButtonProps extends ButtonProps {
    containerStyle: string;
    iconLeft?: any;
}


export interface CustomInputProps extends TextInputProps {

    iconLeft?: any;
    iconRight?: any;
    placeholder?: string;
    placeholderStyle?: string;
    containerStyle?: string;
    secureTextEntry?: boolean;
    onChangeText: (text:string)=>void
}

export  interface OTPInputProps {
    codes: string[];
    refs: RefObject<TextInput>[];
    errorMessages: string[] | undefined;
    onChangeCode: (text: string, index: number) => void;
  }





type RegisterResponse ={
  message: string;
  status: number;
  data:{
    id:string;
    firstName:string;
    lastName:string;
    email:string;
    password:string;
    role:string;
    createdAt:string;
    updatedAt:string;
  }
}

export type Parking=  {
    code:string;
    parkingName: string;
    availableSpaces:number;
    chargingFeePerHour: number;
    
}

export type ParkingsResponse ={
  
  message: string;
  status: number;
  data:Parking[];
}

export type ParkingResponse= {
     code:string;
    parkingName: string;
    availableSpaces:number;
    chargingFeePerHour: number;
    location:string;
    userId:string
    
}

export type CreateParkingResponse ={
  message: string;
  status: number
  data: ParkingResponse;
}


export type CarMovement ={
   plateNumber: string
  parkingCode: string
  entryDateTime:string
  exitDateTime:string
  chargedAmount: number
}
export type RegisterCarEntryResponse ={

  message:string;
  status:number;
  data: CarMovement
}

export type RegisterCarExitResponse ={

  message:string;
  status:number;
  data: CarMovement
}

export type CarMovementsResponse= {
   message:string;
  status:number;
  data: CarMovement[]
}







