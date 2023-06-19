import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserRepository } from 'src/user/user.repository';
import { CreateUserDTO } from './dto/createuser.dto';
import { UserEntity } from './user.entity';
import { v4 as uuid } from 'uuid';
import { UserListDTO } from './dto/UserList.dto';
import { UpdateUserDTO } from './dto/UpdateUser.dto';

@Controller('/users')
export class UserController {

    constructor(private userRepository: UserRepository) {}

    @Post()
    async createUser(@Body() userData: CreateUserDTO){
        // Ao chegar nesse ponto sabemos que os dados estão válidos e o email não existe na nossa base de 
        // dados ainda.
        const userEntity = new UserEntity();

        userEntity.email = userData.email;
        userEntity.password = userData.password;
        userEntity.name = userData.name;
        userEntity.id = uuid(); // Função da biblioteca npm install uuid

        this.userRepository.save(userEntity);
        return { 
            user: new UserListDTO(userEntity.name, userEntity.id),
            message: 'Usuário Criado com sucesso' 
        }
    }

    @Get()
    async listUser(){
        const savedUsers = await this.userRepository.list();

        const usersList = savedUsers.map(
            (user) => new UserListDTO(
                user.name,
                user.id
            )
        );
        
        return usersList;
    }

    @Put('/:id')
    async updateUser(@Param('id') id: string, @Body() newData: UpdateUserDTO) {
        const updatedUser = await this.userRepository.updateUser(id, newData);

        return {
            user: updatedUser,
            message: 'Usuário atualizado com sucesso'
        }
    }

    @Delete('/:id')
    async removeUser(@Param('id') id: string) {
        const removedUser = await this.userRepository.removeUser(id);

        return {
            user: removedUser,
            message: 'Usuário deletado com sucesso'
        }
    }
}
