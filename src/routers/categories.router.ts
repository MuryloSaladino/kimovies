import { Router } from "express";
import { verifyAdmin, verifyCategoryName, verifyToken } from "../middlewares";
import { getCategoriesController, getRealEstatesFromCategoryController, postCategoryController } from "../controllers";

const categoriesRouter:Router = Router()

categoriesRouter.post('', verifyToken, verifyAdmin, verifyCategoryName, postCategoryController)
categoriesRouter.get('', getCategoriesController)
categoriesRouter.get('/:id/realEstate', getRealEstatesFromCategoryController)


export default categoriesRouter