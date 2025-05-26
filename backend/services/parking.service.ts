import { CreateParkingDto } from "../dtos"
import prisma from "../prisma/prisma-client";

 const createParking= async(createParkingDto:CreateParkingDto)=>{
    try {
        
        const existingParking= await prisma.parking.findUnique({
            where:{
                code:createParkingDto.code
            }
        })
        if(existingParking) throw new Error("Parking with the same code already exists")

            const existingUser= await prisma.user.findUnique({
            where:{
                id:createParkingDto.userId
            }
        })
        if(!existingUser) throw new Error("User does not exist ")

            const newParking=await prisma.parking.create({
                data:{
                    ...createParkingDto
                }
            })

            return newParking;
        } catch (error) {
        console.log(error);
        throw new Error;
        
    }

}

 const getParkings= async()=>{
    try {
        
        const parkings= await prisma.parking.findMany({
            select:{
                code:true,
                parkingName:true,
                availableSpaces:true,
                chargingFeePerHour:true
                
            }
        })

        return parkings;
    } catch (error) {
        console.log(error);
        throw new Error;
    }

}


const searchParking= async(query:string)=>{
    try {
        const parkings= await prisma.parking.findMany({
            where:{
                OR:[
                    {parkingName: {contains:query,mode:"insensitive"}},
                  
                ]
            },
            orderBy: {
                availableSpaces: "desc"
            },
            skip:0,
            take:5
        })
        return parkings;
    } catch (error) {
         console.log(error);
        throw new Error;
    }

}
export const parkingService={
    getParkings,
    createParking,
    searchParking
}
