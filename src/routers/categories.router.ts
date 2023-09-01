import { getCategoriesController, getRealEstatesFromCategoryController, postCategoryController } from "../controllers";
import { validateAdmin, validateToken, verifyCategoryName } from "../middlewares";
import { Router } from "express";

const categoriesRouter:Router = Router()

categoriesRouter.post('', validateToken, validateAdmin, verifyCategoryName, postCategoryController)
categoriesRouter.get('', getCategoriesController)
categoriesRouter.get('/:id/realEstate', getRealEstatesFromCategoryController)


export default categoriesRouter