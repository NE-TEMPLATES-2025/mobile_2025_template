import { RegisterDto,LoginDto,InitiateAccountVerificationDto, VerifyAccountDto, InitiateResetPasswordDto, ResetPasswordDto } from "../dtos"
import prisma from "../prisma/prisma-client"
import bcrypt from "bcryptjs";

import { createToken, createTransporter } from "../utils";

export const loginUser = async( loginDto:LoginDto)=>{
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
     
        throw new Error(`Error: ${error}`)
    }

}

export const signup =async(registerDto:RegisterDto)=>{

    try {
        
        const existingUser= await prisma.user.findUnique({
            where:{
                email: registerDto.email
            }
        })

        // if(existingUser) throw new Error("Email already in use!");
        
        const salt= await bcrypt.genSalt(10);
        const hash=await bcrypt.hash(registerDto.password,salt);

        
        const user= await prisma.user.create({
            data:{
                ...registerDto,
                password: hash,
                role:"USER"
            }
        })

        return user;
    } catch (error) {
        console.log(error);
        throw new Error(`Error: ${error}`)
        
    }

}


export const initiateAccountVerification= async(initiateAccountVerificationDto:InitiateAccountVerificationDto)=>{
    try {
        
        
        const user= await prisma.user.findUnique({
            where:{
                email: initiateAccountVerificationDto.email
            }
        })
        if(!user) throw new Error("User not found, please try with a registered email")

        const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
        // await prisma.user.update({
        //     where:{
        //         email: user.email
        //     },
        //     data:{
        //         verificationStatus:"PENDING",
        //         verificationExpires: new Date( Date.now() + 600000)
        //     }
        // })
        // Then send the email

        const transporter= createTransporter();
        
        transporter.sendMail({
            from: process.env.EMAIL_USER,
            to:user.email,
            subject: "Account Verification Request",
            text: "Account Verification Request",
            html:""
        },(err,info)=>{
            if(err){
                console.log(err)
            }
            console.log("Email sent successfully to "+ user.email);
            
        })
}

catch (error) {
    console.log("error ",error);
    throw new Error(`Error while initiating account verification: ${error}`)
    
 }
}



export const verifyAccount= async(verifyAccountDto:VerifyAccountDto)=>{
    try {
            
        // const user= await prisma.user.findFirst({
        //     where:{
        //         verificationCode: verifyAccountDto.verificationCode
        //     }
        // })

        // if(!user) throw new Error("Invalid or expired code ")
        // const isCodeExpired= user.verificationExpires && user.verificationExpires.getTime() < Date.now();

        // if(isCodeExpired) throw new Error("Your code has expired, please try generating a new one");


        // await prisma.user.update({
        //     where:{
        //         email: user.email
        //     },
        //     data:{
        //         verificationStatus:"VERIFIED"
        //     }
        // })
       
        
        
        // const transporter= createTransporter();
        // transporter.sendMail({
        //     from: process.env.EMAIL_USER,
        //     to:user.email,
        //     subject: "Account Verified Successfully",
        //     text: "Account Verification Successfull",
        //     html:""
        // },(err,info)=>{
        //     if(err){
        //         console.log(err)
        //     }
        //     console.log("Email sent successfully to "+ user.email);
            
        // })
        
    } catch (error) {
        console.log("error: ",error)
        throw new Error(`Error: ${error}`)
    }
}

export const initiatePasswordReset=  async(initiatePasswordResetDto:InitiateResetPasswordDto)=>{


    try {
        const user= await prisma.user.findUnique({
            where:{
                email: initiatePasswordResetDto.email
            }
        })
        if(!user) throw new Error("User not found, please try with a registered email")

        const resetCode = Math.floor(100000 + Math.random() * 900000).toString();

        // await prisma.user.update({
        //     where:{
        //         email: user.email
        //     },
        //     data:{
        //         passwordResetCode: resetCode,
        //         passwordResetStatus:"PENDING",
        //         passwordResetExpires:new Date( Date.now() + 600000)
        //     }
        // })



        const transporter= createTransporter();
        
        transporter.sendMail({
            from: process.env.EMAIL_USER,
            to:user.email,
            subject: "Password Reset Request",
            text: "Password Reset Request",
            html:"",
            
        },(err,info)=>{
            if(err){
                console.log(err)
            }
            console.log("Email sent successfully to "+ user.email);
            
        })


        
        } catch (error) {
            console.log("error: ",error)
            throw new Error(`Error: ${error}`)   
        }

}

export const resetPassword= async (resetPasswordDto:ResetPasswordDto)=>{
    try {
        const user= await prisma.user.findUnique({
            where:{
                email: resetPasswordDto.email
            }
        })
        if(!user) throw new Error("User not found, please try with a registered email")

        
        // const isCodeExpired= user.passwordResetExpires && user.passwordResetExpires.getTime() < Date.now();

        // if(isCodeExpired) throw new Error("Your code has expired, please try generating a new one");

        // const salt= await bcrypt.genSalt(10);
        // const newHashedPassword= await bcrypt.hash(resetPasswordDto.newPassword,salt);
        // await prisma.user.update({
        //     where:{
        //         email:user.email
        //     },
        //     data:{
        //         password: newHashedPassword,
        //         passwordResetStatus:"IDLE"
        //     }
        // })

    



        const transporter= createTransporter();
        
        transporter.sendMail({
            from: process.env.EMAIL_USER,
            to:user.email,
            subject: "Password Reset Successfull",
            text: "Password Reset Successfull",
            html:"",
            
        },(err,info)=>{
            if(err){
                console.log(err)
            }
            console.log("Email sent successfully to "+ user.email);
            
        })
        
      } catch (error) {
        console.log("error: ",error)
        throw new Error(`Error: ${error}`)   
      }  
}


