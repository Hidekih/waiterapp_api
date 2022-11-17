import { AppError } from '../../../../../config/AppError';
import { OrderService } from '../../repository/order.service';
import { ICreateOrderDTO, ICreateOrderResponse } from './createOrder.DTO';

export class CreateOrderUseCase {
    constructor(private orderService: OrderService) { }

    async exec(dto: ICreateOrderDTO): Promise<ICreateOrderResponse> {
        const { table, products } = dto;

        this.verifyIfParamExists({ param: table, paramName: 'table' });

        if (products == null || products.length === 0) {
            throw new AppError({
                message: 'Parameter "products" is required!',
                ptMessage: 'O parâmetro "products" é obrigatório!'
            });
        }

        const category = await this.orderService.create({ table, products });

        return category;
    }

    private verifyIfParamExists<T>(params: {
        param: T; paramName: string;
    }): void {
        const { param, paramName } = params;

        if (param == null) {
            throw new AppError({
                message: `Parameter "${paramName}" is required!`,
                ptMessage: `O parâmetro "${paramName}" é obrigatório!`
            });
        }
    }
}