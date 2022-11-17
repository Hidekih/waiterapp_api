import { verifyIfParamExists } from '../../../../../config/utils/verifyIfParamExists';

import { OrderService } from '../../repository/order.service';
import { IDeleteOrderDTO, IDeleteOrderResponse } from './deleteOrder.DTO';

export class DeleteOrderUseCase {
    constructor(private orderService: OrderService) { }

    async exec(dto: IDeleteOrderDTO): Promise<IDeleteOrderResponse> {
        const { orderId } = dto;

        verifyIfParamExists({ param: orderId, paramName: 'orderId' });

        const order = await this.orderService.delete({ orderId });

        return order;
    }
}