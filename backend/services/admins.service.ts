import { RegisterDto } from "../dtos";
import prisma from "../prisma/prisma-client";
import * as bcrypt from 'bcryptjs'

const signup =async(registerDto:RegisterDto)=>{

    try {
        const existingUser= await prisma.user.findUnique({
            where:{
                email:registerDto.email
            }
        })

        if (existingUser) throw new Error("User already exists.");

        const salt= await bcrypt.genSalt(10);
        const hash= await bcrypt.hash(registerDto.password,salt);

        const user= await prisma.user.create({
            data:{
                ...registerDto,
                password:hash,
                role: "ADMIN"
            }
        })

        return user;    
    } catch (error) {
     
        console.log("Error: ",error);
        throw new Error(`Error: ${error}`)
    }
}


const getUsers= async()=>{

    try {
        
        const users= await prisma.user.findMany({
        
        });
        return users;
    } catch (error) {
        console.log("Error: ",error);
        throw new Error(`Error: ${error}`)
        
    }
}

const adminService ={
    signup,
    getUsers
}

export default adminService;