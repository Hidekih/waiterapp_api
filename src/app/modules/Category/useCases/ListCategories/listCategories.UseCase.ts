import { CategoryService } from '../../repository/category.service';

import { IListCategoriesResponse } from './listCategories.DTO';

export class ListCategoriesUseCase {
    constructor(private categoryService: CategoryService) { }

    async exec(): Promise<IListCategoriesResponse> {
        const categories = await this.categoryService.readList();

        return {
            list: categories
        };
    }
}
