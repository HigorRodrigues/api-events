import { Request, Response, Router } from 'express';
import { UserService } from '../services/user.service';
import { createMessage } from '../utils/message.utils';


const routes = Router();
const userService = new UserService();

routes.get('/', async (req: Request, res: Response) => {
	const users = await userService.getUsers();
	res.send(users);
});

routes.get('/details/:id', async (req: Request, res: Response) => {
	const id = Number(req.params.id);
	const user = await userService.getById(id);
	if( !user)
		res.status(404).send(createMessage("Usuário não encontrado!"));
	res.send(user);
});

routes.post('/create', async (req: Request, res: Response) => {
	const user = req.body;	
	if( !user ){
		res.status(404).send(createMessage("Usuário é obrigatório"))
	}
	const userCreated = await userService.addUser(user);	
	res.status(201).send(userCreated);
})

routes.post('/authenticate', async (req: Request, res: Response) => {
	const auth = req.body;
	const user = await userService.getUsersByEmailAndPassword(auth.email, auth.password);
	if( !user )
		res.status(400).send(createMessage("Usuário não encontrado"));
	res.send(user);
});

routes.delete('/delete/:id', async (req: Request, res: Response) => {
	const userId = req.params.id;
	if( !userId ){
		return res.status(400).send(createMessage("Por favor, nos passe um usuário"));
	}
	const userRemoved = await userService.removeUser(Number(userId));
	res.send(userRemoved)
});

routes.put("/update", async (req: Request, res: Response) => {
	const user = req.body;
	if( !user ){
		res.status(400).send(createMessage("Dados do usuário é obrigatório"))
	}
	const userUpdated = await userService.updateUser(user.id, user);
	res.send(userUpdated);
})
export default routes;