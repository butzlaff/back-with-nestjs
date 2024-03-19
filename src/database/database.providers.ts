import { Sequelize } from 'sequelize-typescript';
import { Product } from 'src/product/entities/product.entity';
import { User } from '../user/entities/user.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'mysecret',
        database: 'lexartlabs',
      });
      sequelize.addModels([User, Product]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
