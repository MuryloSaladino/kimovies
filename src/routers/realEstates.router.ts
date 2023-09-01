import { getRealEstatesController, postRealEstateController } from "../controllers";
import { validateAdmin, validateToken, verifyAdress } from "../middlewares";
import { Router } from "express";

const realEstateRouter:Router = Router()

realEstateRouter.post('', verifyAdress, validateToken, validateAdmin, postRealEstateController)
realEstateRouter.get('', getRealEstatesController)


export default realEstateRouter