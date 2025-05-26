import {Router} from 'express'
import asyncHandler from 'express-async-handler'
import { carMovementController } from '../controllers/car_movement.controller';

const router= Router();

router.get("/all",asyncHandler(carMovementController.getCarMovements))
router.post("/entry/register",asyncHandler(carMovementController.registerCarEntry))
router.put("/exit/register",asyncHandler(carMovementController.registerCarExit))
router.get("/by-entry-time",asyncHandler(carMovementController.getCarMovementsByEntryTime))
router.get("/by-exit-time",asyncHandler(carMovementController.getCarMovementsByExitTime))
export default router;