import { Router } from 'express';

import { listCategoriesController } from '../../app/modules/Category/useCases/ListCategories';
import { createCategoriesController } from '../../app/modules/Category/useCases/createCategory';

export const categoriesRouter = Router();

// List
categoriesRouter.get('/categories', (req, res) => {
    return listCategoriesController.handle(req, res);
});

// Create
categoriesRouter.post('/categories',(req, res) => {
    return createCategoriesController.handle(req, res);
});

