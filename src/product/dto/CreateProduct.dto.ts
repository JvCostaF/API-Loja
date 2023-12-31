import { Type } from "class-transformer";
import { ArrayMinSize, IsArray, IsNotEmpty, IsNumber, IsString, IsUUID, IsUrl, MaxLength, Min, ValidateNested } from "class-validator";

export class ProductFeatureDTO {

    @IsString()
    @IsNotEmpty({ message: 'Nome da cadasterística não pode ser vazio' })
    name: string;

    @IsString()
    @IsNotEmpty({ message: 'Descrição da característica não pode ser vazio' })
    description: string;
}

export class ProductImageFeatureDTO {

    @IsUrl()
    url: string;

    @IsString()
    @IsNotEmpty({ message: 'Descrição da imagem não pode ser vazia' })
    description: string;
}

export class CreateProductDTO {

    @IsUUID(undefined, { message: 'ID de usuário inválido' })
    userID: string;

    @IsString()
    @IsNotEmpty({ message: 'O nome não pode ser vazio' })
    name: string;

    @IsNumber({ maxDecimalPlaces: 2, allowNaN: false, allowInfinity: false })
    @Min(1, { message: 'O valor precisa ser maior que zero' })
    price: number;

    @IsNumber()
    @Min(0, { message: 'Quantidade mínima inválida' })
    quantity: number;

    @IsString()
    @IsNotEmpty({ message: 'Descrição do produto não pode ser vazia ' })
    @MaxLength(1000, { message: 'Descrição não pode ter mais que 1000 caracteres' })
    description: string;

    @ValidateNested()
    @IsArray()
    @ArrayMinSize(2)
    @Type(() => ProductFeatureDTO)
    characteristics: ProductFeatureDTO[];

    @ValidateNested()
    @IsArray()
    @ArrayMinSize(1)
    @Type(() => ProductImageFeatureDTO)
    image: ProductImageFeatureDTO[];

    @IsString()
    @IsNotEmpty({ message: 'Categoria do produto não pode ser vazia' })
    category: string;
}

