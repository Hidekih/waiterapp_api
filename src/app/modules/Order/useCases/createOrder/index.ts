import { CreateOrderUseCase } from './createOrder.UseCase';
import { CreateOrderController } from './createOrder.Controller';
import { orderService } from '../../repository';

const createOrderUseCase = new CreateOrderUseCase(orderService);
const createOrderController = new CreateOrderController(createOrderUseCase);

export { createOrderUseCase, createOrderController };