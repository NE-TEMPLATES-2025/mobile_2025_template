import { RegisterCarEntryDto } from "../dtos";
import prisma from "../prisma/prisma-client";



const registerCarEntry = async (registerCarEntryDto: RegisterCarEntryDto) => {
    try {


        const existingParking = await prisma.parking.findUnique({
            where: {
                code: registerCarEntryDto.parkingCode
            }
        })
        if (!existingParking) throw new Error("parking does not exist")

        const newCarEntry = await prisma.carMovement.create({
            data: {
                ...registerCarEntryDto,
                entryDateTime: new Date(registerCarEntryDto.entryDateTime),
            }
        })
        

        if (existingParking.availableSpaces < 1) throw new Error("No enough spaces in parking")
        await prisma.parking.update({
            where: {
                code: registerCarEntryDto.parkingCode
            },
            data: {
                ...existingParking,
                availableSpaces: existingParking.availableSpaces - 1
            }
        })

        // Create a ticker 
         await prisma.ticket.create({
            data:{
                entryDateTime: new Date(newCarEntry.entryDateTime),
                parkingCode:newCarEntry.parkingCode,
                plateNumber: newCarEntry.plateNumber
            }
         })


        return newCarEntry

    } catch (error) {
        console.log(error);
        throw new Error;
    }

}

const registerCarExit = async (carMovementId: string, exitDateTime: string) => {
    try {
        const carMovement = await prisma.carMovement.findUnique({
            where: {
                id: carMovementId
            }
        })

        if (!carMovement) throw new Error("CAR   movement does not exist")
        const parkingDuration = calculateParkingHours(carMovement.entryDateTime.toString(), exitDateTime)

        const parking = await prisma.parking.findUnique({
            where: {
                code: carMovement.parkingCode,

            }
        })
        if (!parking) throw new Error("parking does not exist")

        const totalAmount = parking.chargingFeePerHour * parkingDuration;

        const updatedCarMovement = await prisma.carMovement.update({
            where: {
                id: carMovementId
            },
            data: {
                ...carMovement,
                chargedAmount: totalAmount,
                exitDateTime: new Date(exitDateTime)
            }
        })

        await prisma.parking.update({
            where: {
                code: carMovement.parkingCode
            },
            data: {
                ...parking,
                availableSpaces: parking.availableSpaces + 1
            }
        })


        // Create a new Bill
    await prisma.bill.create({
        data:{
            plateNumber:updatedCarMovement.plateNumber,
            parkingCode:updatedCarMovement.parkingCode,
            entryDateTime:updatedCarMovement.entryDateTime,
            exitDateTime:updatedCarMovement.exitDateTime,
            chargedAmount: updatedCarMovement.chargedAmount
        }
    })

        return updatedCarMovement;
    } catch (error) {
        console.log(error);
        throw new Error;
    }

}

const getCarMovementsByEntryTime = async (start: string, end: string) => {
    try {
        const carMovements = await prisma.carMovement.findMany({
            where: {
                entryDateTime: {
                    gte: new Date(start),
                    lte: new Date(end),
                },
            },
        });
        return carMovements;
    } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch car movements by entry time");
    }
};

const getCarMovementsByExitTime = async (start: string, end: string) => {
    try {
        const carMovements = await prisma.carMovement.findMany({
            where: {
                exitDateTime: {
                    gte: new Date(start),
                    lte: new Date(end),
                },
            },
        });
        return carMovements;
    } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch car movements by exit time");
    }
};

const getAllCarMovements= async()=>{
    try {
        const carMovements= await  prisma.carMovement.findMany();
        return carMovements;
    } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch  car movements");
    }
}


// utility function to get parking hours

function calculateParkingHours(entryDateTime: string, exitDateTime: string) {
    const entry = new Date(entryDateTime);
    const exit = new Date(exitDateTime);

    // Check for invalid dates
    if (isNaN(entry.getTime()) || isNaN(exit.getTime())) {
        throw new Error("Invalid date format");
    }

    const diffMs = exit.getTime() - entry.getTime();

    // Convert to hours
    const diffHours = diffMs / (1000 * 60 * 60);

    return diffHours;
}




export const carMovementService = {
    registerCarEntry,
    registerCarExit,
    getCarMovementsByEntryTime,
    getCarMovementsByExitTime,
    getAllCarMovements
}