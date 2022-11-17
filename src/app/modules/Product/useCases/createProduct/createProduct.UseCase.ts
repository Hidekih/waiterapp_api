import { AppError } from '../../../../../config/AppError';
import { ProductService } from '../../repository/product.service';
import { ICreateProductDTO, ICreateProductResponse } from './createProduct.DTO';
import { verifyIfParamExists } from '../../../../../config/utils/verifyIfParamExists';

export class CreateProductUseCase {
    constructor(private productService: ProductService) { }

    async exec(dto: ICreateProductDTO): Promise<ICreateProductResponse> {
        const { name, category, description, imagePath, price, ingredients } = dto;

        verifyIfParamExists({ param: name, paramName: 'name' });
        verifyIfParamExists({ param: category, paramName: 'category' });
        verifyIfParamExists({ param: description, paramName: 'description' });
        verifyIfParamExists({ param: imagePath, paramName: 'imagePath' });
        verifyIfParamExists({ param: price, paramName: 'price' });

        const categories = await this.productService.create({ name, category, description, imagePath, price, ingredients });

        return categories;
    }
}