import { Router } from 'express';

import { createOrderController } from '../../app/modules/Order/useCases/createOrder';
import { deleteOrderController } from '../../app/modules/Order/useCases/deleteOrder';
import { listOrdersController } from '../../app/modules/Order/useCases/listOrders';
import { updateOrderStatusController } from '../../app/modules/Order/useCases/updateOrderStatus';

export const orderRouter = Router();

// List
orderRouter.get('/orders', (req, res) => {
    return listOrdersController.handle(req, res);
});

// Create
orderRouter.post('/orders', (req, res) => {
    return createOrderController.handle(req, res);
});

// Change status
orderRouter.patch('/orders', (req, res) => {
    return updateOrderStatusController.handle(req, res);
});

//  Delete/Cancel order. This route will change deleted prop to true
orderRouter.delete('/orders/:orderId', (req, res) => {
    return deleteOrderController.handle(req, res);
});