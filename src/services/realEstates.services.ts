import { Repository } from "typeorm";
import { TRealEstateCreation, TRealEstateResponse } from "../interfaces";
import { Address, Category, RealEstate } from "../entities";
import { AppDataSource } from "../data-source";


export const createRealEstateService = async (payload:TRealEstateCreation) => {

    const addressRepo:Repository<Address> = AppDataSource.getRepository(Address)
    const realEstateRepo:Repository<RealEstate> = AppDataSource.getRepository(RealEstate)
    const categoryRepo:Repository<Category> = AppDataSource.getRepository(Category)

    const address:Address = await addressRepo.create(payload.address)
    await addressRepo.save(address)

    const category:Category|null = await categoryRepo.findOneBy({ id: payload.categoryId })
    
    const realEstate:RealEstate = await realEstateRepo.create({ ...payload, address: address, category: category! })
    await realEstateRepo.save(realEstate)

    return realEstate
}

export const readRealEstateService = async () => {

    const realEstateRepo:Repository<RealEstate> = AppDataSource.getRepository(RealEstate)

    const realEstates:TRealEstateResponse[] = (await realEstateRepo.find({ relations: { address: true, category: false } })).map((realEstate => {
        return { ...realEstate, createdAt: undefined, updatedAt: undefined }
    }))

    return realEstates
}