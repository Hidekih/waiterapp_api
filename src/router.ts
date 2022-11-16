import { Router } from 'express';

import { createCategoriesController } from './app/modules/Category/useCases/createCategory';
import { listCategoriesController } from './app/modules/Category/useCases/ListCategories';

export const router = Router();

// List
router.get('/categories', (req, res) => {
    return listCategoriesController.handle(req, res);
});

// Create
router.post('/categories',(req, res) => {
    return createCategoriesController.handle(req, res);
});

// List
router.get('/products', (req, res) => {
    res.send('OK');
});

// Create
router.post('/products',(req, res) => {
    res.send('OK');
});

// Get products by category
router.get('/products/:categoryId', (req, res) => {
    res.send('OK');
});

// List
router.get('/orders', (req, res) => {
    res.send('OK');
});

// Create
router.post('/orders', (req, res) => {
    res.send('OK');
});

// Change status
router.patch('/orders/:orderId', (req, res) => {
    res.send('OK');
});

//  Delete/Cancel order. This route will change deleted prop to true
router.delete('/orders/:orderId', (req, res) => {
    res.send('OK');
});