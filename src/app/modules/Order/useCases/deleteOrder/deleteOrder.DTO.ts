import { IOrder } from '../../repository/order';

export type IDeleteOrderDTO = {
    orderId: string;
};

export type IDeleteOrderResponse = IOrder;