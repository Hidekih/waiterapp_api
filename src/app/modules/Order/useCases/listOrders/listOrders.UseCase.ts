import { OrderService } from '../../repository/order.service';
import { IListOrdersDTO, IListOrdersResponse } from './listOrders.DTO';

export class ListOrdersUseCase {
    constructor(private orderService: OrderService) { }

    async exec(dto: IListOrdersDTO): Promise<IListOrdersResponse> {
        const { table, status } = dto;

        const orders = await this.orderService.readList({ table, status });

        return {
            list: orders
        };
    }
}