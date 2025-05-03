import jwt from 'jsonwebtoken'
import nodemailer, { Transporter } from "nodemailer"

export const createToken= (id: string)=>{

    return jwt.sign({id: id},process.env.JWT_SECRET_KEY as string, {expiresIn:"3d"})
}

export const createTransporter = () : Transporter =>{
    const transporter= nodemailer.createTransport({
        port:465,
        host:"smtp.gmail.com",
        auth:{
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        },
        secure: true

    })
    

    return transporter

    
}
