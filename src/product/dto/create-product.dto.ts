import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({
    example: 'Product 1',
  })
  name: string;

  @ApiProperty({
    example: 'Product 1 description',
  })
  description: string;

  @ApiProperty({
    example: 100,
  })
  price: number;
}
