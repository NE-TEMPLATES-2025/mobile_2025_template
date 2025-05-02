import { RegisterDto,LoginDto } from "../dtos"
import prisma from "../prisma/prisma-client"
import bcrypt from "bcryptjs";

import { createToken } from "../utils";

export const login = async(loginDto:LoginDto)=>{
    try {

        const user= await prisma.user.findUnique({
            where:{
                email: loginDto.email
            }
        })

        if(!user) throw new Error("Email or Password Invalid");

        const matches= await bcrypt.compare(loginDto.password,user.password);

        if(!matches) throw new Error("Email or Password are invalid");

        const token = createToken(user.id);

        return {user,token}

        
    } catch (error) {
        
    }

}

export const signup =(registerDto:RegisterDto)=>{

}