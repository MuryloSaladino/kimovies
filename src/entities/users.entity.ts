import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
class User {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ type: 'varchar', length: 45 })
    name: string

    @Column({ type: 'varchar', length: 45, unique: true })
    email: string

    @Column({ default: false })
    admin: boolean

    @Column({ type: 'varchar', length: 120 })
    password: string

    @Column({ type: 'date' })
    createdAt: string

    @Column({ type: 'date' })
    updatedAt: string

    @Column({ type: 'date', nullable: true })
    deletedAt: string
}

export default User