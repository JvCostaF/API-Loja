import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { useContainer } from 'class-validator';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true, //Mandamos o Nest ignorar todas as propriedades do JSON que não estiverem no DTO.
      forbidNonWhitelisted: true //Manda o Nest lançar um erro se enviarem um dado no JSON que não está no DTO.
    })
  );

  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  await app.listen(3000);
}
bootstrap();
