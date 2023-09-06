import { Repository } from "typeorm";
import { TCategoryCreation } from "../interfaces";
import { Category, RealEstate } from "../entities";
import { AppDataSource } from "../data-source";


export const createCategoryService = async (payload:TCategoryCreation) => {

    const categoryRepo:Repository<Category> = AppDataSource.getRepository(Category)

    const category:Category = categoryRepo.create(payload)

    await categoryRepo.save(category)

    return category
}

export const readCategoriesService = async () => {

    const categoryRepo:Repository<Category> = AppDataSource.getRepository(Category)

    const categories:Category[] = await categoryRepo.find()

    return categories
}

export const readRealEstatesFromCategoryService = async (id:number) => {

    const categoryRepo:Repository<Category> = AppDataSource.getRepository(Category)
    const realEstateRepo:Repository<RealEstate> = AppDataSource.getRepository(RealEstate)

    const category:Category|null = await categoryRepo.findOneBy({ id: id })
    const realEstates:RealEstate[] = await realEstateRepo.find({ where: { category: { id: category!.id } } })

    return { ...category, realEstate: realEstates }
}