import {
    Entity, 
    Column, 
    CreateDateColumn, 
    UpdateDateColumn, 
    DeleteDateColumn, 
    PrimaryGeneratedColumn
} from 'typeorm'

@Entity({ name: 'products' })
export class ProductEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'user_id', length: 100, nullable: false })
    userID: string

    @Column({ name: 'name', length: 100, nullable:false })
    name: string;

    @Column({ name: 'price', nullable:false })
    price: number;

    @Column({ name: 'quantity', nullable:false })
    quantity: number;

    @Column({ name: 'description', length: 255, nullable:false })
    description: string;

    @Column({ name: 'category', length: 100, nullable:false })
    category: string;

    // characteristics: ProductFeature[];

    // images: ProductImage[];

    @CreateDateColumn({ name: 'createdAt' })
    createdAt: string;

    @UpdateDateColumn({ name: 'updatedAt' })
    updatedAt: string;

    @DeleteDateColumn({ name: 'deletedAt' })
    deletedAt: string;

}