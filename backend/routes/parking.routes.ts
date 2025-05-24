import { Router } from 'express';
import asyncHandler from 'express-async-handler';
import {  checkAuth } from '../middlewares/auth.middleware';
import { parkingsController } from '../controllers/parking.controller';

const router = Router();

// router.use(checkAuth);

router.post("/create", asyncHandler(parkingsController.createParking));

router.get("/all", asyncHandler(parkingsController.getAllParkings));

export default router;
