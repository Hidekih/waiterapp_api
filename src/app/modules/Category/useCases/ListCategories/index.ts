import { ListCategoriesUseCase } from './listCategories.UseCase';
import { ListCategoriesController } from './listCategories.Controller';

import { categoryService } from '../../../Category/repository';

const listCategoriesUseCase = new ListCategoriesUseCase(categoryService);
const listCategoriesController = new ListCategoriesController(listCategoriesUseCase);

export { listCategoriesUseCase, listCategoriesController };