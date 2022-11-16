import { ICategory } from '../../repository/category';

// export interface IListCategoriesDTO {
//     any: string,
// }

export interface IListCategoriesResponse {
    list: Array<ICategory>
}