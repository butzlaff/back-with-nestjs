import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Users api test')
    .setDescription(
      `Esta API foi desenvolvida para facilitar o controle e gerenciamento de usuários em sua aplicação. 
      Ela oferece endpoints para operações básicas de CRUD 
      (Create, Read, Update, Delete) de usuários, permitindo que 
      sua aplicação gerencie dados de usuários de forma eficiente e 
      segura.\n\nSwagger é uma ferramenta poderosa para design, 
      documentação e teste de APIs RESTful. 
      Ele permite que você defina a estrutura da sua API, 
      incluindo endpoints, parâmetros, respostas e esquemas de dados, em um 
      formato legível por máquina chamado OpenAPI Specification 
      (anteriormente conhecido como Swagger Specification).\n\nAo incluir a 
      descrição da sua API Test no Swagger, você está fornecendo uma 
      documentação clara e precisa para desenvolvedores e usuários da sua API. 
      Isso facilita a compreensão de como usar a API, quais endpoints estão disponíveis, 
      quais parâmetros são necessários e quais respostas esperar, 
      tornando o processo de integração mais suave e eficiente.`,
    )
    .setVersion('1.0')
    .addTag('users')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3001);
}
bootstrap();
