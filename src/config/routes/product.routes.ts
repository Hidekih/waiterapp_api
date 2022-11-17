import { Router } from 'express';

import { createProductController } from '../../app/modules/Product/useCases/createProduct';
import { listProductsController } from '../../app/modules/Product/useCases/ListProducts';
import { listProductsByCategoryController } from '../../app/modules/Product/useCases/ListProductsByCategory';

export const productRouter = Router();

// List
productRouter.get('/products', (req, res) => {
    return listProductsController.handle(req, res);
});

// Create
productRouter.post('/products',(req, res) => {
    return createProductController.handle(req, res);
});

// Get products by category
productRouter.get('/products/:categoryId', (req, res) => {
    return listProductsByCategoryController.handle(req, res);
});