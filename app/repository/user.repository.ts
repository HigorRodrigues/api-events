import { getConnection } from "typeorm";
import { User } from "../entities/user.entity";


export class UserRepository{

    static getAll(){
        const userRepository = getConnection().getRepository(User);
        return userRepository.find();
    }

    static findById(id: number){
        const userRepository = getConnection().getRepository(User);
        return userRepository.findOne(Number(id));
    }

    static findByEmailAndPassaword(email: string, password: string){
        const userRepository = getConnection().getRepository(User);
        return userRepository.findOne({ where: {email, password}});
    }

    static create(user: User){
        const userRepository = getConnection().getRepository(User);
        return userRepository.insert(user);
    }

    static delete(user: User){
        const userRepository = getConnection().getRepository(User);
        return userRepository.delete(user);
    }

    static update(id: number, user: User){
        const userRepository = getConnection().getRepository(User);
        return userRepository.update({id: id}, user);
    }
}