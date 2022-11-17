import { AppError } from '../../../../config/AppError';
import { Order } from '../../../models/Order';
import { ICreateOrder, IOrder, IOrderRepository } from './order';

export class OrderService implements IOrderRepository {
    async create(params: ICreateOrder): Promise<IOrder> {
        const order = await Order.create(params);

        return order.toObject();
    }
    async readList(params: { table?: string; status?: Array<'WAITING' | 'IN_PRODUCTION' | 'DONE'> }): Promise<IOrder[]> {
        const { table ,status } = params;

        // Build pipeline
        let pipeline: any = { deleted: false };
        if (table != null) pipeline = { ...pipeline, table };
        if (status != null && status.length > 0) pipeline = { ...pipeline, status: { '$in': status } };

        const orders = await Order
            .find(pipeline)
            .sort({ createdAt: 1 })
            .populate('products.product');

        return orders.map((o => o.toObject())) ?? [];
    }
    async updateStatus(params: { orderId: string; status: 'WAITING' | 'IN_PRODUCTION' | 'DONE'; }): Promise<IOrder> {
        const { orderId, status } = params;

        const order = await Order.findByIdAndUpdate(orderId, { status }, { new: true });

        if (order == null) {
            throw new AppError({
                errorStatusCode: 410,
            });
        }

        return order.toObject();
    }
    async delete(params: { orderId: string; }): Promise<IOrder> {
        const { orderId } = params;

        const order = await Order.findByIdAndUpdate(orderId, { deleted: true }, { new: true });

        if (order == null) {
            throw new AppError({
                errorStatusCode: 410,
            });
        }


        return order.toObject();
    }
}