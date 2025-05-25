import axios from "axios";
import { protectedApiClient } from "./apiClient";
import type { CreateParkingResponse, Parking, ParkingResponse, ParkingsResponse } from "@/types";


export const getAllParkings= async()=>{
    try {
        const response= await protectedApiClient.get<ParkingsResponse>("/parking/all")

        return response.data.data;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch parkings");
    }
}


export const createParking=async(
    code:string,
    parkingName:string,
    availableSpaces:number,
    location: string,
    chargingFeePerHour:number,
    userId:string)=>{
    try {
        const response= await protectedApiClient.post<CreateParkingResponse>("/parking/create",{
            code,
            parkingName,
            availableSpaces,
            location,
            chargingFeePerHour,
            userId
        })
        return response.data
    } catch (error) {
        console.log(error);
        throw new Error("Failed to create parkings");
    
    }
}


export const searchParking= async(query:string)=>{
    try {
        
        const response= await protectedApiClient.get<ParkingsResponse>(`/parking/search/${encodeURIComponent(query)}`)

        return response.data.data;


    } catch (error) {
        console.log(error);
        throw new Error("Failed to search for parkings");
    }

}