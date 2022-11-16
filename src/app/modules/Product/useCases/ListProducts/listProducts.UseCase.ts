import { ProductService } from '../../repository/product.service';

import { IListProductsResponse } from './listProducts.DTO';

export class ListProductsUseCase {
    constructor(private productService: ProductService) { }

    async exec(): Promise<IListProductsResponse> {
        const products = await this.productService.readList({});

        return {
            list: products
        };
    }
}
