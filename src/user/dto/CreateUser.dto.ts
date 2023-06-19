import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { UniqueEmail } from "../validation/unique-email.validator";


export class CreateUserDTO {

    @IsNotEmpty({ message: 'O nome não pode ser vazio'})
    name: string;

    @IsEmail(undefined, { message: 'O email informado é inválido'})
    @UniqueEmail({ message: 'Já existe um usuário com este email' })
    email: string;

    @MinLength(6, { message: 'A senha precisa ter pelo menos seis caracteres'})
    password: string;
} 