import { UpdateOrderStatusUseCase } from './updateOrderStatus.UseCase';
import { UpdateOrderStatusController } from './updateOrderStatus.Controller';
import { orderService } from '../../repository';

const updateOrderStatusUseCase = new UpdateOrderStatusUseCase(orderService);
const updateOrderStatusController = new UpdateOrderStatusController(updateOrderStatusUseCase);

export { updateOrderStatusUseCase, updateOrderStatusController };