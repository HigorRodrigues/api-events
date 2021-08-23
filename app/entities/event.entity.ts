import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'event'})
export class Event{

    @PrimaryGeneratedColumn({name: 'id'})
    id?: number;

    @Column({name: 'name', type: 'varchar', length: 255})
    name?: string

    @Column({name: 'description', type: 'varchar', length: 255})
    description?: string

    @Column({name: 'urlImage', type: 'varchar', length: 255})
    urlImage?: string

    @Column({name: 'start_date', type: 'datetime'})
    startDate?: string | Date

    @Column({name: 'end_date', type: 'datetime'})
    endDate?: string | Date
}