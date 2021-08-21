import { Request, Response, Router } from 'express';
import { UserService } from '../services/user.service';
import { createMessage } from '../utils/message.utils';


const routes = Router();
const userService = new UserService();

routes.get('/', (req: Request, res: Response) => {
	console.log(userService.getAll());
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
	if( !user )
		res.status(404).send(createMessage("Usuário não encontrado"));
	res.send(user);
});

routes.post('/create', (req: Request, res: Response) => {
	const user = req.body;	
	if( !user ){
		res.status(404).send(createMessage("Usuário é obrigatório"))
	}
	userService.addUser(user);
	console.log(userService.getAll());
	res.status(201).send(user);
})


export default routes;