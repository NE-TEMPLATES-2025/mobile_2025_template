
import { NextFunction, Request, Response } from 'express'
import jwt from "jsonwebtoken";
import prisma from '../prisma/prisma-client';



interface DecodedToken {
    id: string
}


export interface CustomRequest extends Request {
    user?: any
}
export const checkAuth = async(req:CustomRequest,res:Response,next: NextFunction)=>{
    
    
        const authHeader= req.headers.authorization;
        if (authHeader && authHeader.startsWith("Bearer ")){
            try {
                
                const token= authHeader.substring(7);  // or const token= authHeader.split(" ")[1];
                const decodedToken = jwt.verify(token,process.env.JWT_SECRET_KEY as string, {}) as DecodedToken
    
                console.log("Decoded Token",decodedToken);
                
                const user= await prisma.user.findUnique({
                    where:{
                        id: decodedToken.id
                    }
                })
    
                if(!user) return;
    
                req.user= decodedToken
                
    
               next();
            } catch (error) {
                console.log("error",error)
                res.status(401).json({message:'Invalid or expired token'})
                
            }
        }
        else{
            res.status(401).json({message: "Authorization Header missing or malformed"})
        }

    }

export default {
    checkAuth
}