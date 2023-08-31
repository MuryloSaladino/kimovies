import { Router } from "express";
import { verifyAdmin, verifyAdress, verifyToken } from "../middlewares";
import { getRealEstatesController, postRealEstateController } from "../controllers";

const realEstateRouter:Router = Router()

realEstateRouter.post('', verifyAdress, verifyToken, verifyAdmin, postRealEstateController)
realEstateRouter.get('', getRealEstatesController)


export default realEstateRouter