import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as compression from 'compression';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // setup compression
  app.use(compression({ level: 1 }));
  // setup validation pipe
  app.useGlobalPipes(new ValidationPipe())
  // listen server
  await app.listen(3000);
}
bootstrap();
