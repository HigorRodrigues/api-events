import { User } from '../entities/user.entity';
import { UserRepository } from '../repository/user.repository';

export class UserService{

	private users: Array<User> = [];

	getUsers(){
		return UserRepository.getAll();
	}

	getUsersByEmailAndPassword(email: string, password: string){
		return UserRepository.findByEmailAndPassaword(email, password);
	}

	addUser(user: User){
		return UserRepository.create(user);
	}

	getById(id: number){
		return UserRepository.findById(id);
	}

	findByName(name: string){
		return UserRepository.findByName(name);
	}

	removeUser(id: number){
		return UserRepository.delete({id: id});
	}

	updateUser(id: number, user: User){
		return UserRepository.update(Number(id), user);
	}
	
}