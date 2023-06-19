import { ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface, registerDecorator } from "class-validator";
import { UserRepository } from "../user.repository";
import { Injectable } from "@nestjs/common";

/*
Implementamos nossa classe de validação que implementa a interface ValidatorConstraintInterface,
transformando nossa classe em um provider para injetar as dependências. Configuramos como uma validação
assíncrona. 
*/
@Injectable()
@ValidatorConstraint({ async: true })
export class UniqueEmailValidator implements ValidatorConstraintInterface {

    constructor(private userRepository: UserRepository) {}

    async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> { 
        const userEmailExists = await this.userRepository.emailExists(value);
        return !userEmailExists;
    }
}

/*
Criamos um decorator que está sendo usado no CreateUserDTO para validar se um email já existe na nossa base
de dados ou não. 
*/
export const UniqueEmail = (optionsValidations: ValidationOptions) => {
    return (object: Object, property: string) => {
        registerDecorator({
            target: object.constructor,
            propertyName: property,
            options: optionsValidations,
            constraints: [],
            validator: UniqueEmailValidator
        })
    }
}


