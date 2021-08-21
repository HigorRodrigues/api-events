import { Event } from '../models/event.model';
import { Activity } from '../models/activity.model';

export class EventService{

	private a: Array<Activity> = [
		{
			id: 1,
			name: "Atividade Teste 1",
			type: "Mesa Redonda",
			workLoad: 5,
			status: "Aberta",
			startDate: new Date()
		},
		{
			id: 2,
			name: "Atividade Teste 2",
			type: "Mesa Redonda",
			workLoad: 5,
			status: "Aberta",
			startDate: new Date(),
		},
		{
			id: 3,
			name: "Atividade Teste 3",
			type: "Mesa Redonda",
			workLoad: 5,
			status: "Aberta",
			startDate: new Date()
		},
		{
			id: 4,
			name: "Atividade Teste 4",
			type: "Mesa Redonda",
			workLoad: 5,
			status: "Aberta",
			startDate: new Date()
		}
	];

	private events: Array<Event> = [
		{
			id: 1,
			name: "Evento Teste 1",
			description: "Teste 1",
			urlImage: "https://storage.googleapis.com/atados-v3/user-uploaded/images/04dc1777-f79c-4f36-b20b-ff38a4781be4.jpg",
			startDate: new Date(),
			endDate: new Date(),
			
		},
		{
			id: 2,
			name: "Evento Teste 2",
			description: "Teste 2",
			urlImage: "https://storage.googleapis.com/atados-v3/user-uploaded/images/04dc1777-f79c-4f36-b20b-ff38a4781be4.jpg",
			startDate: new Date(),
			endDate: new Date(),
		},
		{
			id: 3,
			name: "Evento Teste 3",
			description: "Teste 3",
			urlImage: "https://storage.googleapis.com/atados-v3/user-uploaded/images/04dc1777-f79c-4f36-b20b-ff38a4781be4.jpg",
			startDate: new Date(),
			endDate: new Date(),
			
		},
		{
			id: 4,
			name: "Evento Teste 4",
			description: "Teste 4",
			urlImage: "https://storage.googleapis.com/atados-v3/user-uploaded/images/04dc1777-f79c-4f36-b20b-ff38a4781be4.jpg",
			startDate: new Date(),
			endDate: new Date(),
			
		}
	];

	getAll(){
		return this.events;
	}

	getById(id: number){
		return this.events.find( e => e.id === Number(id));
	}

}