import { BeforeInsert, BeforeSoftRemove, BeforeUpdate, Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import { hashSync } from "bcryptjs";

@Entity('users')
class User {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ type: 'varchar', length: 45 })
    name: string | undefined

    @Column({ type: 'varchar', length: 45, unique: true })
    email: string | undefined

    @Column({ default: false })
    admin: boolean

    @Column({ type: 'varchar', length: 120 })
    password: string | undefined

    @Column({ type: 'date', nullable: true })
    createdAt: string | null

    @Column({ type: 'date', nullable: true })
    updatedAt: string | null

    @DeleteDateColumn({ type: 'date', nullable: true })
    deletedAt?: string | null | undefined

    @BeforeInsert()
    setAtributes() {
        this.password = hashSync(this.password!)

        const date = new Date() 
        this.createdAt = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
        this.updatedAt = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    }

    @BeforeUpdate()
    setUpdate() {
        this.password = hashSync(this.password!)

        const date = new Date() 
        this.updatedAt = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    }

    @BeforeSoftRemove()
    setRemoved() {
        const date = new Date() 
        this.deletedAt = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    }
}

export default User