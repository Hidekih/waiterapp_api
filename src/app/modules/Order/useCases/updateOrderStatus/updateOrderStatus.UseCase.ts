import { verifyIfParamExists } from '../../../../../config/utils/verifyIfParamExists';

import { OrderService } from '../../repository/order.service';
import { IUpdateOrderStatusDTO, IUpdateOrderStatusResponse } from './updateOrderStatus.DTO';

export class UpdateOrderStatusUseCase {
    constructor(private orderService: OrderService) { }

    async exec(dto: IUpdateOrderStatusDTO): Promise<IUpdateOrderStatusResponse> {
        const { orderId, status } = dto;

        verifyIfParamExists({ param: orderId, paramName: 'orderId' });
        verifyIfParamExists({ param: status, paramName: 'status' });

        const order = await this.orderService.updateStatus({ orderId, status });

        return order;
    }
}