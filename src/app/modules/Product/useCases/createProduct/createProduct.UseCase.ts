import { AppError } from '../../../../../config/AppError';
import { ProductService } from '../../repository/product.service';

import { ICreateProductDTO, ICreateProductResponse } from './createProduct.DTO';

export class CreateProductUseCase {
    constructor(private productService: ProductService) { }

    async exec(dto: ICreateProductDTO): Promise<ICreateProductResponse> {
        const { name, category, description, imagePath, price, ingredients } = dto;

        this.verifyIfParamExists({ param: name, paramName: 'name' });
        this.verifyIfParamExists({ param: category, paramName: 'category' });
        this.verifyIfParamExists({ param: description, paramName: 'description' });
        this.verifyIfParamExists({ param: imagePath, paramName: 'imagePath' });
        this.verifyIfParamExists({ param: price, paramName: 'price' });

        if (ingredients == null || ingredients.length == 0) {
            throw new AppError({
                message: 'Parameter "ingredients" is required!',
                ptMessage: 'O parâmetro "ingredientes" é obrigatório!'
            });
        }

        const categories = await this.productService.create({ name, category, description, imagePath, price, ingredients });

        return categories;
    }

    private verifyIfParamExists<T>(params: {
        param: T; paramName: string;
    }): void {
        const { param, paramName } = params;

        if (param == null) {
            throw new AppError({
                message: `Parameter "${paramName}" is required!`,
                ptMessage: `O parâmetro "${paramName}" é obrigatório!`
            });
        }
    }
}