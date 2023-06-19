import { Injectable } from "@nestjs/common";
import { UserEntity } from "./user.entity";

@Injectable()
export class UserRepository {
    
    private users: UserEntity[] = [];

    async save(user: UserEntity){
        this.users.push(user);
    }

    async list(){
        return this.users;
    }

    async emailExists(email: String){

        const possibleUser = this.users.find(
            (user) => user.email === email
        );

        return possibleUser !== undefined;
    }

    async updateUser(id: string, updateData: Partial<UserEntity>){

        const possibleUser = this.users.find(
            userSaved => userSaved.id === id
        ); // Procurando o usuário pelo id

        if(!possibleUser){
            throw new Error('Usuário não encontrado') // Verificando se o usuário existe
        }
        
        Object.entries(updateData).forEach(([key, value]) => {
            if(key === 'id'){
                return;
            }

            possibleUser[key] = value;
        });

        return possibleUser;
    }
}