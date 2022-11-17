import { IOrder } from '../../repository/order';

export type IListOrdersDTO = {
    table?: string;
    status?: Array<'WAITING' | 'IN_PRODUCTION' | 'DONE'>;
};

export interface IListOrdersResponse {
    list: Array<IOrder>
}