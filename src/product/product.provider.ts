import { Product } from './entities/product.entity';

export const ProductProviders = [
  {
    provide: 'PRODUCT_REPOSITORY',
    useValue: Product,
  },
];
