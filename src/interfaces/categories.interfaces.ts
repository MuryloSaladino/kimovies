import { Category } from "../entities";

export type TCategoryCreation = Omit<Category, 'id'>