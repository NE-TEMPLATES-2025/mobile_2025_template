import { Request, Response } from "express"
import { CreateParkingDto } from "../dtos"
import { parkingService } from "../services/parking.service";
import { ApiResponse } from "../utils/response";



 const createParking= async(req:Request,res:Response)=>{

     const body= req.body as CreateParkingDto;
    try {
        
        const response= await parkingService.createParking(body)
        res.status(201).json(
            ApiResponse.success(
                "Parking created successfully",
                201,
                response
            )
        )
    } catch (error) {
        
        res.status(500).json(
            ApiResponse.error(
                "Failed to create parking",500
            )
        )
    }
}

const getAllParkings= async(req:Request,res:Response) =>{
    try {
        
        const response= await parkingService.getParkings();
         res.status(200).json(
            ApiResponse.success(
                "Parking retrieved successfully",
                200,
                response
            )
        )
    } catch (error) {
         res.status(500).json(
            ApiResponse.error(
                "Failed to get parkings",500
            )
        )
    }
}

const searchParking= async(req:Request,res:Response)=>{
    const query=req.params.query;
    try {
        const response= await parkingService.searchParking(query);
        console.log(response);
        
        res.status(200).json(
            ApiResponse.success(
                "Searched parking retrieved successfully",
                200,
                response
            )
        )
    } catch (error) {
         res.status(500).json(
            ApiResponse.error(
                "Failed to get parkings",500
            )
        )
    }
}

export const parkingsController= {
    createParking,
    getAllParkings,
    searchParking
}