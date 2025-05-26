import { protectedApiClient } from "./apiClient";
import type {  CarMovementsResponse, RegisterCarEntryResponse, RegisterCarExitResponse } from "@/types";





export const registerCarEntry=async(
    plateNumber:string,
    parkingCode:string,
    entryDateTime:string)=>{
    try {
        const response= await protectedApiClient.post<RegisterCarEntryResponse>("/car-movement/entry/register",{
            plateNumber,
            parkingCode,
            entryDateTime
        })
        return response.data
    } catch (error:any) {
        console.log(error);
        throw new Error(error.message);
    
    }
}

export const registerCarExit=async(
    car_entry_id:string,exitDateTime:string)=>{
    try {
        const response= await protectedApiClient.post<RegisterCarExitResponse>("/car-movement/exit/register",{
        car_entry_id,
        exitDateTime
        })
        return response.data
    } catch (error:any) {
        console.log(error);
        throw new Error(error.message);
    
    }
}


export const getCarMovements=async(
    )=>{
    try {
        const response= await protectedApiClient.get<CarMovementsResponse>("/car-movement/all")
        return response.data
    } catch (error:any) {
        console.log(error);
        throw new Error(error.message);
    
    }
}




