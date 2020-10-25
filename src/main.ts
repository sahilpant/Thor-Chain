import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder,SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  (global as any).WebSocket = require('ws');
  (global as any).XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('midgard');
  const options = new DocumentBuilder().setTitle('Midgard REST Api').setDescription('Thor Chain Midgard API').setVersion('1.0.0').build();
  const  document = SwaggerModule.createDocument(app,options);
  SwaggerModule.setup('app',app,document);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
