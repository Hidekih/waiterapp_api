import express, { Router } from 'express';
import multer from 'multer';
import path from 'node:path';

import { createProductController } from '../../app/modules/Product/useCases/createProduct';
import { listProductsController } from '../../app/modules/Product/useCases/ListProducts';
import { listProductsByCategoryController } from '../../app/modules/Product/useCases/ListProductsByCategory';

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, callback) {
            callback(null, path.resolve(__dirname, '..', '..', '..', 'uploads'));
        },
        filename(req, file, callback) {
            callback(null, `${Date.now()}-${file.originalname}`);
        }
    }),
});

export const productRouter = Router();

productRouter.use('/uploads', express.static(path.resolve(__dirname, '..', '..', '..', 'uploads')));

// List
productRouter.get('/products', (req, res) => {
    return listProductsController.handle(req, res);
});

// Create
productRouter.post('/products', upload.single('image'), (req, res) => {
    return createProductController.handle(req, res);
});

// Get products by category
productRouter.get('/products/:categoryId', (req, res) => {
    return listProductsByCategoryController.handle(req, res);
});