import { ListProductsByCategoryUseCase } from './ListProductsByCategory.UseCase';
import { ListProductsByCategoryController } from './ListProductsByCategory.Controller';

import { productService } from '../../repository';

const listProductsByCategoryUseCase = new ListProductsByCategoryUseCase(productService);
const listProductsByCategoryController = new ListProductsByCategoryController(listProductsByCategoryUseCase);

export { listProductsByCategoryUseCase, listProductsByCategoryController };