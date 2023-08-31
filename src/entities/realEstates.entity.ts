import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import Category from "./categories.entity";
import Adress from "./adresses.entity";

@Entity('realEstates')
class RealEstate {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ type: 'boolean', default: false })
    sold: boolean

    @Column('decimal', { precision: 5, scale: 2, default: 0 })
    value: number

    @Column()
    size: number

    @Column({ type: 'date' })
    createdAt: string

    @Column({ type: 'date' })
    updatedAt: string

    @OneToOne(() => Adress)
    @JoinColumn()
    adress: Adress

    @ManyToOne(() => Category, (category) => category.realEstates)
    category: Category
}

export default RealEstate