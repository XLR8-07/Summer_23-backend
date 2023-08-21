import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication } from '@nestjs/common';
import {
  DocumentBuilder,
  SwaggerCustomOptions,
  SwaggerModule,
} from '@nestjs/swagger';

/**
 * OpenAPI swagger document generator
 */
class APIDocument {
  static setup(app: INestApplication) {
    const options = new DocumentBuilder()
      .setTitle('MAD API')
      .setDescription(
        `The MAD API exposes some APIs for academic and learning purposes.`,
      )
      .build();
    const document = SwaggerModule.createDocument(app, options, {
      ignoreGlobalPrefix: true,
    });
    const customOptions: SwaggerCustomOptions = {
      customSiteTitle: 'MAD API spec',
    };
    SwaggerModule.setup('docs', app, document, customOptions);
  }
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  APIDocument.setup(app);
  await app.listen(3000);
}
bootstrap();
