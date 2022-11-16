import { IProduct } from '../../repository/product';

export interface IListProductsByCategoryDTO {
    categoryId: string;
}

export interface IListProductsByCategoryResponse {
    list: Array<IProduct>
}