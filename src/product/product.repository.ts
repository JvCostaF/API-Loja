import { Injectable, Param } from "@nestjs/common";
import { ProductEntity } from "./product.entity";

@Injectable()
export class ProductRepository {

    private products: ProductEntity[] = [];

    async save(product: ProductEntity){
        this.products.push(product);
    }

    async list(){
        return this.products;
    }

    private findById(id: string){
        const possibleProduct = this.products.find(
            productSaved => productSaved.id === id
        ); // Procurando o produto pelo id

        if(!possibleProduct){
            throw new Error('Produto não encontrado') // Verificando se o produto existe
        }

        return possibleProduct;
    }

    async updateProduct(@Param('id') id:string, updateData: Partial<ProductEntity>){

        const nonUpdateData = ['id', 'userID'];

        const product = this.findById(id);

        Object.entries(updateData).forEach(([key, value]) => {
            if(nonUpdateData.includes(key)){
                return; // O ID e UserID não podem ser alterados!
            }

            product[key] = value;

        });

        return product
        
    }

    async removeProduct(id: string){

        const removedProduct = this.findById(id);

        this.products = this.products.filter(
            (product) => product.id !== id
        ); // Filtra a lista de produtos pelo ID removendo o produto que tiver o ID igual ao ID enviado na requisição.

        return removedProduct;
    }

}