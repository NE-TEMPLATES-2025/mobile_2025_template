import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from 'cors'

import authRouter from "./routes/auth.route"
import userRouter from "./routes/user.route"
import parkingRouter from "./routes/parking.routes"
import carMovementRouter from "./routes/car_movement.routes"



// Loading environment variables
dotenv.config()

// Creating instance of express application
const app= express();


const PORT=process.env.PORT || 3000;


// Third-party Middlewares
app.use(cors({
    methods: "*",
    origin: "*",

}))
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));




// Route middlewares

app.use("/api/v1/auth",authRouter)
app.use("/api/v1/user",userRouter)
app.use("/api/v1/parking",parkingRouter)
app.use("/api/v1/car-movement",carMovementRouter)


app.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT} successfully`);
    
})