import { Request, Response, Router } from 'express';
import { EventService } from '../services/event.service';

const routes = Router();

const eventService = new EventService();

routes.get('/', (req: Request, res: Response) => {
	const students = eventService.getAll();
	res.send(students);
});

routes.get('/details/:id', (req: Request, res: Response) => {
	const id = req.params.id;
	const event = eventService.getById(Number(id));
	if( !event ){
		return res.status(404).send({message: "Evento não encontrado"});
	}
	res.send(event);
})

export default routes;