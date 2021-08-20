import { Request, Response, Router } from 'express';
import { UserService } from '../services/user.service';
import { createMessage } from '../utils/message.utils';


const routes = Router();
const userService = new UserService();

routes.get('/', (req: Request, res: Response) => {
	res.send(userService.getAll());
});

routes.get('/details/:id', (req: Request, res: Response) => {
	const id = Number(req.params.id);
	const user = userService.getById(id);
	if( !user)
		res.status(404).send(createMessage("Usuário não encontrado!"));
	res.send(user);
});

routes.post('/authenticate', (req: Request, res: Response) => {
	const auth = req.body;
	const user = userService.getAuthenticate(auth.email, auth.password);
	console.log(user);
	if( !user )
		res.status(404).send(createMessage("Usuário não encontrado"));
	res.send(user);
});


export default routes;