import { IOrder } from '../../repository/order';

export type IUpdateOrderStatusDTO = {
    orderId: string;
    status: 'WAITING' | 'IN_PRODUCTION' | 'DONE';
};

export type IUpdateOrderStatusResponse = IOrder;