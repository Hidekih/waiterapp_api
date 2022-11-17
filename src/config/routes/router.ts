import { Router } from 'express';
import { categoriesRouter } from './category.routes';
import { orderRouter } from './order.routes';
import { productRouter } from './product.routes';

// Para não esquecer
// * req.body -> Um json
// * req.query -> /rota/:id
// * req.params -> rota?id=123870129380123&status=ALGUMA_COISA

export const router = Router();

router.use(categoriesRouter);
router.use(orderRouter);
router.use(productRouter);
