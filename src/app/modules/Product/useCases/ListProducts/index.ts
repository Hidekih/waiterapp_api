import { ListProductsUseCase } from './listProducts.UseCase';
import { ListProductsController } from './listProducts.Controller';

import { productService } from '../../repository';

const listProductsUseCase = new ListProductsUseCase(productService);
const listProductsController = new ListProductsController(listProductsUseCase);

export { listProductsUseCase, listProductsController };