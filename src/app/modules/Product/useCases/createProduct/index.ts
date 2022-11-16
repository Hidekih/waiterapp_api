import { CreateProductUseCase } from './createProduct.UseCase';
import { CreateProductController } from './createProduct.Controller';

import { productService } from '../../repository';

const createProductUseCase = new CreateProductUseCase(productService);
const createProductController = new CreateProductController(createProductUseCase);

export { createProductUseCase, createProductController };