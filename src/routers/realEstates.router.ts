import { getRealEstatesController, postRealEstateController } from "../controllers";
import { validateAdmin, validateBody, validateToken, verifyAdress, verifyCategoryIdForRealEstate } from "../middlewares";
import { Router } from "express";
import { postRealEstateSchema } from "../schemas";

const realEstateRouter:Router = Router()

realEstateRouter.post('', validateToken, validateAdmin, validateBody(postRealEstateSchema), verifyCategoryIdForRealEstate, verifyAdress, postRealEstateController)
realEstateRouter.get('', getRealEstatesController)


export default realEstateRouter