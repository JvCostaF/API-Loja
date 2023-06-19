import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MySQLConfigService } from './config/mysql.config.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    UserModule, 
    ProductModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useClass: MySQLConfigService,
      inject: [MySQLConfigService]
    })
  ]
})
export class AppModule {}
