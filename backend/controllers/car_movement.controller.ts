import {Request,Response  } from 'express'
import {ApiResponse} from '../utils/response'
import { RegisterCarEntryDto } from '../dtos'
import { carMovementService } from '../services/car_movement.service';



const registerCarEntry=  async(req:Request,res:Response)=>{
    const body=req.body as RegisterCarEntryDto;
    
        
        const response= await carMovementService.registerCarEntry(body)
         res.status(201).json(
            ApiResponse.success(
                "Car entry registered successfully",201,response
            )
        )
}

const registerCarExit= async(req:Request,res:Response)=>{
    const {carMovementId,exitDateTime}= req.body;
    
        const response= await carMovementService.registerCarExit(carMovementId,exitDateTime);
         res.status(201).json(
            ApiResponse.success(
                "Car EXIT registered successfully",201,response
            )
        )
}


export const getCarMovementsByEntryTime = async (req: Request, res: Response) => {
  const { start, end } = req.query;

  if (!start || !end) {
     res.status(400).json({ message: "Start and end query parameters are required" });
  }

  try {
    const data = await carMovementService.getCarMovementsByEntryTime(start!.toString(), end!.toString());
    res.status(200).json(
        ApiResponse.success("car movements retrieved successfully",200,data)
    );
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

export const getCarMovementsByExitTime = async (req: Request, res: Response) => {
  const { start, end } = req.query;

  if (!start || !end) {
   res.status(200).json({error:"error getting car movements"})
}

  try {
    const data = await carMovementService.getCarMovementsByExitTime(start!.toString(), end!.toString());
     res.status(200).json(
        ApiResponse.success("car movements retrieved successfully",200,data)
    );
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};


 const getCarMovements= async(req:Request,res:Response)=>{
  try {
    const data = await carMovementService.getAllCarMovements();
     res.status(200).json(
        ApiResponse.success("car movements retrieved successfully",200,data)
    );
    
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
}



export const carMovementController={
    registerCarEntry,
    registerCarExit,
    getCarMovementsByEntryTime,
    getCarMovementsByExitTime,
    getCarMovements
}