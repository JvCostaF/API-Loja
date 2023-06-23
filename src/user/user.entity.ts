import {Entity, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn} from 'typeorm'

@Entity({ name: 'users'})
export class UserEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'name', length: 100, nullable: false })
    name: string;

    @Column({ name: 'email', length: 70, nullable: false })
    email: string;

    @Column({ name: 'password', length: 255, nullable: false })
    password: string;

    // Abaixo temos um certo registro da entidade, marcando a hora quando um usuário for criado, atualizado ou deletado.

    @CreateDateColumn({ name: 'createdAt' })
    createdAt: string;

    @UpdateDateColumn({ name: 'updatedAt' })
    updatedAt: string;

    @DeleteDateColumn({ name: 'deletedAt' })
    deletedAt: string;
}