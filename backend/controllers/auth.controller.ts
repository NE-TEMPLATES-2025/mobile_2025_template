import { Request, Response } from "express";
import { LoginDto, RegisterDto } from "../dtos";
import { loginUser,signup } from '../services/auth.service'
import { ApiResponse } from "../utils/response";



export const login = async (req:Request,res:Response)=> {

    const request= req.body as LoginDto;

    const response= await loginUser(request);
   res.status(200).json(ApiResponse.success("User logged in successfully",200,response))

}

export const register = async (req:Request,res:Response)=> {

    const request= req.body as RegisterDto;

    const response= await signup(request);
    
     res.status(201).json(ApiResponse.success("User  created successfully",201,response))

}


const authController= {
    login,
    register
}


export default authController
