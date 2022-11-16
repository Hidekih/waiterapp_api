import { IProduct } from '../../Product/repository/product';

export interface IOrder {
    _id: string;
    table: string;
    status: 'WAITING' | 'IN_PRODUCTION' | 'DONE';
    createdAt: Date;
    deleted: boolean;
    products: Array<{
        product: IProduct;
        quantity: number;
    }>;
}

export type ICreateOrder = Omit<IOrder, '_id' | 'status' | 'createdAt' | 'deleted'>;

export interface IOrderRepository {
    create(params: ICreateOrder): Promise<IOrder>;
    readList(params: { status?: Array<'WAITING' | 'IN_PRODUCTION' | 'DONE'> }): Promise<Array<IOrder>>;
    updateStatus(params: { orderId: string; status: 'WAITING' | 'IN_PRODUCTION' | 'DONE' }): Promise<IOrder>;
    delete(params: { orderId: string }): Promise<IOrder>;
}