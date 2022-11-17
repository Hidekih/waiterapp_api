import { ListOrdersUseCase } from './listOrders.UseCase';
import { ListOrdersController } from './listOrders.Controller';
import { orderService } from '../../repository';

const listOrdersUseCase = new ListOrdersUseCase(orderService);
const listOrdersController = new ListOrdersController(listOrdersUseCase);

export { listOrdersUseCase, listOrdersController };