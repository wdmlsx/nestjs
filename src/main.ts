import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  console.log(0);
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Nest App')
    .setDescription('The First Nest App')
    .setVersion('1.0.0')
    .build();

  app.setGlobalPrefix('v1/api');

  app.enableCors();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  console.log(2222);
  await app.listen(3000);
}
bootstrap();
