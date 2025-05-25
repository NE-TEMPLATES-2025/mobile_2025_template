import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { QUERY_KEYS } from "./queryKey"
import { createParking, getAllParkings } from "@/app/api/parking"
import { getCarMovements, registerCarEntry, registerCarExit } from "@/app/api/car_movement";


interface CreateParkingInput {
  code: string;
  parkingName: string;
  availableSpaces: number;
  location:string;
  chargingFeePerHour: number;
  userId: string;
}

interface RegisterCarEntryInput {
  plateNumber:string;
    parkingCode:string;
    entryDateTime:string
}

interface RegisterCarExitInput {
  car_entry_id:string;
    exitDateTime:string
}

export const useGetAllParkings= ()=>{
    return useQuery({
        queryKey: [QUERY_KEYS.GET_ALL_PARKINGS],
        queryFn: ()=> getAllParkings()
    })
}





export const useCreateParkingMutation= ()=>{
    const queryClient= useQueryClient();
    return useMutation( {
        mutationFn: async ({code,parkingName,availableSpaces,location,chargingFeePerHour,userId}:CreateParkingInput)=>createParking(
            code,
            parkingName,
            availableSpaces,
            location,
            chargingFeePerHour,
            userId
        ),
        onSuccess: ()=>{
     queryClient.invalidateQueries({
        queryKey:[QUERY_KEYS.GET_ALL_PARKINGS]
     })
        }
    })
}



export const useRegisterCarEntryMutation= ()=>{
    return useMutation({
        mutationFn: ({plateNumber,parkingCode,entryDateTime}:RegisterCarEntryInput)=>registerCarEntry(plateNumber,parkingCode,entryDateTime)
    })
}

export const useRegisterCarExitMutation= ()=>{
    return useMutation({
        mutationFn: ({car_entry_id,exitDateTime}:RegisterCarExitInput)=>registerCarExit(car_entry_id,exitDateTime)
    })
}


export const useGetAllCarMovements= ()=>{
    return useQuery({
        queryKey:[QUERY_KEYS.GET_ALL_CAR_MOVEMENTS],
        queryFn:()=> getCarMovements()
    })
}