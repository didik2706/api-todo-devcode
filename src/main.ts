import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as compression from 'compression';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './activity-groups/errors/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // setup compression
  app.use(compression({ level: 1 }));
  // setup validation pipe
  app.useGlobalPipes(new ValidationPipe());
  // setup exception filter
  app.useGlobalFilters(new HttpExceptionFilter())
  // listen server
  await app.listen(3030);
}
bootstrap();
