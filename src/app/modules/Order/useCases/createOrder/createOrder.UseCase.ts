import { AppError } from '../../../../../config/AppError';
import { verifyIfParamExists } from '../../../../../config/utils/verifyIfParamExists';

import { OrderService } from '../../repository/order.service';
import { ICreateOrderDTO, ICreateOrderResponse } from './createOrder.DTO';

export class CreateOrderUseCase {
    constructor(private orderService: OrderService) { }

    async exec(dto: ICreateOrderDTO): Promise<ICreateOrderResponse> {
        const { table, products } = dto;

        verifyIfParamExists({ param: table, paramName: 'table' });

        if (products == null || products.length === 0) {
            throw new AppError({
                message: 'Parameter "products" is required!',
                ptMessage: 'O parâmetro "products" é obrigatório!'
            });
        }

        const order = await this.orderService.create({ table, products });

        return order;
    }
}