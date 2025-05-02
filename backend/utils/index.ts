import jwt from 'jsonwebtoken'

export const createToken= (id: string)=>{

    return jwt.sign({id: id},process.env.JWT_SECRET_KEY as string, {expiresIn:"3d"})
}

