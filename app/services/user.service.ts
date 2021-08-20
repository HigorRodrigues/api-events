import { User } from '../models/user.model';

export class UserService{

	private users: Array<User> = [
		{
			id: 1,
			name: "Higor",
			email: "higor.italva@gmail.com",
			password: "123456",
			perfil: "ADMIN"
		},
		{
			id: 2,
			name: "Maria",
			email: "maria@gmail.com",
			password: "123456",
			perfil: "PARTICIPANTE"
		},
	];

	getAll(){
		return this.users;
	}

	getById(id: number){
		return this.users.find( u => u.id === Number(id));
	}

	getAuthenticate(email: string, password: string){
		return this.users.find( (user) => 
			user.email === email && user.password === password);
	}
}