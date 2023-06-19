class ProductFeature {
    
    name: string;

    description: string;
}

class ProductImage {

    url: string;

    description: string;
}


export class ProductEntity {

    id: string;

    name: string;

    price: number;

    quantity: number;

    description: string;

    category: string;

    characteristics: ProductFeature[];

    images: ProductImage[];

}