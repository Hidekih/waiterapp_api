import { ProductService } from '../../repository/product.service';

import { IListProductsByCategoryDTO, IListProductsByCategoryResponse } from './ListProductsByCategory.DTO';

export class ListProductsByCategoryUseCase {
    constructor(private productService: ProductService) { }

    async exec(dto: IListProductsByCategoryDTO): Promise<IListProductsByCategoryResponse> {
        const { categoryId } = dto;

        const products = await this.productService.readList({ categoryId });

        return {
            list: products
        };
    }
}
