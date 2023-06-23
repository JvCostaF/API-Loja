import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from "@nestjs/typeorm";
import { ProductEntity } from "src/product/product.entity";
import { UserEntity } from "src/user/user.entity";

@Injectable()
export class MySQLConfigService implements TypeOrmOptionsFactory{

    constructor(private configService: ConfigService) {};

    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            type: 'mysql',
            host: this.configService.get<string>('DB_HOST'),
            port: this.configService.get<number>('DB_PORT'),
            username: this.configService.get<string>('DB_USER'),
            password: this.configService.get<string>('DB_PASSWORD'),
            database: this.configService.get<string>('DB_NAME'),
            entities: [UserEntity, ProductEntity], // Para não precisar colocar entidade por entidade!
            synchronize: true
        }   
    }   
}