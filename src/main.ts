import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 4000;

  app.setGlobalPrefix('api/v1');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
      validationError: {
        target: false,
        value: false,
      },
      disableErrorMessages: false,
      exceptionFactory: (errors) => {
        return {
          statusCode: 400,
          message: 'Bad Request',
          errors,
        };
      },
    }),
  );

  console.log(`Running app on :http://localhost:${port}/api/v1`);
  
  await app.listen(port);
}
bootstrap();
