import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { ValidationPipe } from "@nestjs/common";
import { HttpExceptionFilter } from "./common/http-exception.filter";

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);

    app.enableCors(); // Habilita CORS para todas as rotas
    app.setGlobalPrefix("api"); // Define um prefixo global para todas as rotas
    app.enableShutdownHooks(); // Habilita os hooks de desligamento
    app.useGlobalFilters(new HttpExceptionFilter()); // Usando os filtros de exceção globais
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true, // Remove propriedades não validadas
        forbidNonWhitelisted: true, // Lança erro se propriedades não validadas forem encontradas
        transform: true, // Transforma os dados de entrada para os tipos corretos
      }),
    );

    // Configuração do Swagger
    const config = new DocumentBuilder()
      .setTitle("API Documentation")
      .setDescription("API for managing resources")
      .setVersion("1.0")
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup("api-docs", app, document);

    await app.listen(process.env.PORT || 3000);
    console.log(`Application is running on: ${await app.getUrl()}`);
  } catch (error) {
    console.error("Error during application bootstrap:", error);
    process.exit(1);
  }
}

bootstrap();
