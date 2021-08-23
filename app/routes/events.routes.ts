import { Request, Response, Router } from 'express';
import { EventService } from '../services/event.service';
import { createMessage } from '../utils/message.utils';

const routes = Router();

const eventService = new EventService();

routes.get('/', async (req: Request, res: Response) => {
	const events = await eventService.getEvents();
	res.send(events);
});

routes.get('/details/:id', async (req: Request, res: Response) => {
	const id = Number(req.params.id);
	const event = await eventService.getById(id);
	if( !event)
		res.status(404).send(createMessage("Evento não encontrado!"));
	res.send(event);
});

routes.get('/find/:name', async (req: Request, res: Response) => {
	const name = req.params.name;
	const event = await eventService.findByName(name);
	if( !event)
		res.status(404).send(createMessage("Evento não encontrado!"));
	res.send(event);
});

routes.post('/create', async (req: Request, res: Response) => {
	const event = req.body;	
	if( !event ){
		res.status(404).send(createMessage("Evento é obrigatório"))
	}
	const eventCreated = await eventService.addEvent(event);	
	res.status(201).send(eventCreated);
})

routes.delete('/delete/:id', async (req: Request, res: Response) => {
	const userId = req.params.id;
	if( !userId ){
		return res.status(400).send(createMessage("Por favor, nos passe um evento"));
	}
	const userRemoved = await eventService.removeEvent(Number(userId));
	res.send(userRemoved)
});

routes.put("/update", async (req: Request, res: Response) => {
	const user = req.body;
	if( !user ){
		res.status(400).send(createMessage("Dados do evento é obrigatório"))
	}
	const userUpdated = await eventService.updateUser(user.id, user);
	res.send(userUpdated);
})

export default routes;