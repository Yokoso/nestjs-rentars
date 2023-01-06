import "reflect-metadata";
import { BaseExceptionFilter, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from "@nestjs/common/pipes";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalFilters(new BaseExceptionFilter());
  app.useGlobalPipes(new ValidationPipe({
    // production env
    // disableErrorMessages: true,
  }));

  app.enableCors();

  await app.listen(process.env.PORT || 9000);
}
bootstrap();
