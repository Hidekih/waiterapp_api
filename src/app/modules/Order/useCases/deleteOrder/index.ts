import { DeleteOrderUseCase } from './deleteOrder.UseCase';
import { DeleteOrderController } from './deleteOrder.Controller';
import { orderService } from '../../repository';

const deleteOrderUseCase = new DeleteOrderUseCase(orderService);
const deleteOrderController = new DeleteOrderController(deleteOrderUseCase);

export { deleteOrderUseCase, deleteOrderController };