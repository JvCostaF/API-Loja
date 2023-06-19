import { Type } from "class-transformer";
import { ArrayMinSize, IsArray, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID, IsUrl, MaxLength, Min, ValidateNested } from "class-validator";
import { ProductFeatureDTO, ProductImageFeatureDTO } from './CreateProduct.dto'

export class UpdateProductDTO {

    @IsUUID(undefined, { message: 'ID de produto inválido' })
    id: string;

    @IsUUID(undefined, { message: 'ID de usuário inválido' })
    userID: string;

    @IsString()
    @IsNotEmpty({ message: 'O nome não pode ser vazio' })
    @IsOptional()
    name: string;

    @IsNumber({ maxDecimalPlaces: 2, allowNaN: false, allowInfinity: false })
    @Min(1, { message: 'O valor precisa ser maior que zero' })
    @IsOptional()
    price: number;

    @IsNumber()
    @Min(0, { message: 'Quantidade mínima inválida' })
    @IsOptional()
    quantity: number;

    @IsString()
    @IsNotEmpty({ message: 'Descrição do produto não pode ser vazia ' })
    @MaxLength(1000, { message: 'Descrição não pode ter mais que 1000 caracteres' })
    @IsOptional()
    description: string;

    @ValidateNested()
    @IsArray()
    @ArrayMinSize(2)
    @Type(() => ProductFeatureDTO)
    @IsOptional()
    characteristics: ProductFeatureDTO[];

    @ValidateNested()
    @IsArray()
    @ArrayMinSize(1)
    @Type(() => ProductImageFeatureDTO)
    @IsOptional()
    image: ProductImageFeatureDTO[];

    @IsString()
    @IsNotEmpty({ message: 'Categoria do produto não pode ser vazia' })
    @IsOptional()
    category: string;
}