import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductProviders } from './product.provider';
import { ProductService } from './product.service';

@Module({
  controllers: [ProductController],
  providers: [ProductService, ...ProductProviders],
})
export class ProductModule {}
