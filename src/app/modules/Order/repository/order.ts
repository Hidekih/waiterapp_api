interface IProductOrder {
    product: string;
    quantity: number;
}

export interface IOrder {
    _id: string;
    table: string;
    status: 'WAITING' | 'IN_PRODUCTION' | 'DONE';
    createdAt: Date;
    deleted: boolean;
    products: Array<IProductOrder>;
}

export type ICreateOrder = Omit<IOrder, '_id' | 'status' | 'createdAt' | 'deleted'>;

export interface IOrderRepository {
    create(params: ICreateOrder): Promise<IOrder>;
    readList(params: { table?: string; status?: Array<'WAITING' | 'IN_PRODUCTION' | 'DONE'> }): Promise<Array<IOrder>>;
    updateStatus(params: { orderId: string; status: 'WAITING' | 'IN_PRODUCTION' | 'DONE' }): Promise<IOrder>;
    delete(params: { orderId: string }): Promise<IOrder>;
}