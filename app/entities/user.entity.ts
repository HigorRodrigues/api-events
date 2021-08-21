import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'user'})
export class User{

    @PrimaryGeneratedColumn({name: 'id'})
    id?: number;

    @Column({name: 'name', type: 'varchar', length: 255})
    name?: string

    @Column({name: 'email', type: 'varchar', length: 255})
    email?: string

    @Column({name: 'password', type: 'varchar', length: 255})
    password?: string

    @Column({name: 'profile', type: 'varchar', length: 255})
    profile?: string
}