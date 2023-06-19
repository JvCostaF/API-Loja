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

    /*
    Método que encontra um usuário passando como parâmetro seu ID, caso esse usuário não seja encontrado retorna um error
    alertando que o usuários não existe!
    */
    private findById(id: string){
        const possibleUser = this.users.find(
            userSaved => userSaved.id === id
        ); // Procurando o usuário pelo id

        if(!possibleUser){
            throw new Error('Usuário não encontrado') // Verificando se o usuário existe
        }

        return possibleUser;
    }

    async updateUser(id: string, updateData: Partial<UserEntity>){

        const user = this.findById(id);
        
        Object.entries(updateData).forEach(([key, value]) => {
            if(key === 'id'){
                return;
            }

            user[key] = value;
        });

        return user;
    }

    async removeUser(id: string){

        const user = this.findById(id);

        this.users = this.users.filter(
            savedUser => savedUser.id !== user.id
        );

        return user;
    }
}