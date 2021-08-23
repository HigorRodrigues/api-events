import { Event } from '../entities/event.entity';
import { EventRepository } from '../repository/event.repository';
export class EventService{

	getEvents(){
		return EventRepository.getAll();
	}

	getById(id: number){
		return EventRepository.findById(Number(id));
	}

	addEvent(event: Event){
		return EventRepository.create(event);
	}

	removeEvent(id: number){
		return EventRepository.delete({id: id});
	}

	updateUser(id: number, event: Event){
		return EventRepository.update(Number(id), event);
	}

	findByName(name: string){
		return EventRepository.findByName(name);
	}
}