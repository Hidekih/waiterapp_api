import { AppError } from '../../../../config/AppError';
import { Order } from '../../../models/Order';
import { ICreateOrder, IOrder, IOrderRepository } from './order';

export class OrderService implements IOrderRepository {
    async create(params: ICreateOrder): Promise<IOrder> {
        const order = await Order.create(params);

        return order.toObject();
    }
    async readList(params: { status?: Array<'WAITING' | 'IN_PRODUCTION' | 'DONE'> }): Promise<IOrder[]> {
        const { status } = params;

        let pipeline = {};
        if (status != null && status.length > 0) {
            pipeline = { status: { '$in': status } };
        }

        const orders = await Order.find(pipeline);

        return orders.map((o => o.toObject())) ?? [];
    }
    async updateStatus(params: { orderId: string; status: 'WAITING' | 'IN_PRODUCTION' | 'DONE'; }): Promise<IOrder> {
        const { orderId, status } = params;

        const order = await Order.findById(orderId);

        if (order == null) {
            throw new AppError({
                errorStatusCode: 410,
            });
        }

        order.status = status;

        await Order.updateOne({ order });

        return order.toObject();
    }
    async delete(params: { orderId: string; }): Promise<IOrder> {
        const { orderId } = params;

        const order = await Order.findById(orderId);

        if (order == null) {
            throw new AppError({
                errorStatusCode: 410,
            });
        }

        order.deleted = true;

        await Order.updateOne({ order });

        return order.toObject();
    }
}