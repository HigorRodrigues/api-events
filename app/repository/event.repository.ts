import { getConnection, Like } from "typeorm";
import { Event } from "../entities/event.entity";

export class EventRepository{

    static getAll(){
        const eventRepository = getConnection().getRepository(Event);
        return eventRepository.find({order: {startDate: 'DESC'}});
    }

    static findByName(name: string){
        const eventRepository = getConnection().getRepository(Event);
        return eventRepository.find({
            name: Like(`%${name}%`)
        })
    }

    static findById(id: number){
        const eventRepository = getConnection().getRepository(Event);
        return eventRepository.findOne(Number(id));
    }
    static findByEmailAndPassaword(email: string, password: string){
        const eventRepository = getConnection().getRepository(Event);
        return eventRepository.findOne({ where: {email, password}});
    }

    static create(event: Event){
        const eventRepository = getConnection().getRepository(Event);
        return eventRepository.insert(event);
    }

    static delete(event: Event){
        const eventRepository = getConnection().getRepository(Event);
        return eventRepository.delete(event);
    }

    static update(id: number, event: Event){
        const eventRepository = getConnection().getRepository(Event);
        return eventRepository.update({id: id}, event);
    }
}