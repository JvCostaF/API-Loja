class ProductFeatureListDTO {
    name: string;

    description: string;
}

class ProductImageListDTO {
    url: string;

    description: string;
}

export class ProductListDTO {

    id: string;

    userID: string;

    name: string;

    price: number;

    quantity: number;

    description: string;

    category: string;

    characteristics: ProductFeatureListDTO[];

    images: ProductImageListDTO[];

}