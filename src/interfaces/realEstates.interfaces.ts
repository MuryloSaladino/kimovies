import { RealEstate } from "../entities"
import { TAdress } from "./adresses.interfaces"

export type TRealEstateCreation = {
    value: number,
    size: number,
    address: TAdress
    categoryId: number
}

export type TRealEstateResponse = Partial<RealEstate>