import { CreateCategoriesUseCase } from './createCategory.UseCase';
import { CreateCategoriesController } from './createCategory.Controller';

import { categoryService } from '../../../Category/repository';

const createCategoriesUseCase = new CreateCategoriesUseCase(categoryService);
const createCategoriesController = new CreateCategoriesController(createCategoriesUseCase);

export { createCategoriesUseCase, createCategoriesController };