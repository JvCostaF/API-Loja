import { IsEmail, IsNotEmpty, IsOptional, MinLength } from "class-validator";
import { UniqueEmail } from "../validation/unique-email.validator";


export class UpdateUserDTO {

    @IsNotEmpty({ message: 'O nome não pode ser vazio'})
    @IsOptional()
    name: string;

    @IsEmail(undefined, { message: 'O email informado é inválido'})
    @UniqueEmail({ message: 'Já existe um usuário com este email' })
    @IsOptional()
    email: string;

    @MinLength(6, { message: 'A senha precisa ter pelo menos seis caracteres'})
    @IsOptional()
    password: string;
} 