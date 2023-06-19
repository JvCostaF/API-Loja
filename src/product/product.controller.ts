import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { ProductRepository } from "./product.repository";
import { CreateProductDTO } from "./dto/CreateProduct.dto";
import { ProductEntity } from "./product.entity";
import { v4 as uuid } from 'uuid';
import { UpdateProductDTO } from "./dto/UpdateProduct.dto";

@Controller('/products')
export class ProductController {

    constructor(private productRepository: ProductRepository){}

    @Post()
    async createProduct(@Body() productData: CreateProductDTO){

        const productEntity = new ProductEntity();
        
        productEntity.id = uuid();
        productEntity.name = productData.name;
        productEntity.price = productData.price;
        productEntity.quantity = productData.quantity;
        productEntity.description = productData.description;
        productEntity.category = productData.category;
        productEntity.characteristics = productData.characteristics;
        productEntity.images = productData.image;

        const savedProduct = this.productRepository.save(productEntity);

        return savedProduct;
    }

    @Get()
    async list(){
        return this.productRepository.list();
    }

    @Put('/:id')
    async updateProduct(@Param('id') id: string, @Body() newData: UpdateProductDTO){
        const updateProduct = await this.productRepository.updateProduct(id, newData);

        return {
            product: updateProduct,
            message: 'Produto atualizado com sucesso'
        }
    }
}

