import { AfterLoad, BeforeInsert, BeforeUpdate, Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import Category from "./categories.entity";
import Address from "./adresses.entity";

@Entity('realEstates')
class RealEstate {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ type: 'boolean', default: false })
    sold: boolean

    @Column({ type: 'decimal', precision: 12, scale: 2, default: 0 })
    value: number | string

    @Column()
    size: number

    @Column({ type: 'date', nullable: true })
    createdAt: string | undefined

    @Column({ type: 'date', nullable: true })
    updatedAt: string | undefined

    @OneToOne(() => Address)
    @JoinColumn()
    address: Address | undefined

    @ManyToOne(() => Category, (category) => category.realEstates)
    category: Category

    @BeforeInsert()
    setAtributes() {
        const date = new Date() 
        this.createdAt = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
        this.updatedAt = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    }

    @BeforeUpdate()
    setUpdate() {
        const date = new Date() 
        this.updatedAt = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    }

    @AfterLoad()
    responseBody() {
        this.value = Number(this.value)
    }
}

export default RealEstate