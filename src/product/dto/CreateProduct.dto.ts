import { Type } from "class-transformer";
import { ArrayMinSize, IsArray, IsNotEmpty, IsNumber, IsString, IsUUID, IsUrl, MaxLength, Min, ValidateNested } from "class-validator";

export class ProductFeatureDTO {

    @IsString()
    @IsNotEmpty({ message: 'Nome da cadasterística não pode ser vazio' })
    name: String;

    @IsString()
    @IsNotEmpty({ message: 'Descrição da característica não pode ser vazio' })
    description: String;
}

export class ProductImageFeatureDTO {

    @IsUrl()
    url: String;

    @IsString()
    @IsNotEmpty({ message: 'Descrição da imagem não pode ser vazia' })
    description: String;
}

export class CreateProductDTO {

    @IsUUID(undefined, { message: 'ID de usuário inválido' })
    userID: String;

    @IsString()
    @IsNotEmpty({ message: 'O nome não pode ser vazio' })
    name: String;

    @IsNumber({ maxDecimalPlaces: 2, allowNaN: false, allowInfinity: false })
    @Min(1, { message: 'O valor precisa ser maior que zero' })
    price: Number;

    @IsNumber()
    @Min(0, { message: 'Quantidade mínima inválida' })
    quantity: Number;

    @IsString()
    @IsNotEmpty({ message: 'Descrição do produto não pode ser vazia ' })
    @MaxLength(1000, { message: 'Descrição não pode ter mais que 1000 caracteres' })
    description: String;

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
    category: String;
}

