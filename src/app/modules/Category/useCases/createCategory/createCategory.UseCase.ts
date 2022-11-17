import { CategoryService } from '../../repository/category.service';
import { ICreateCategoriesDTO, ICreateCategoriesResponse } from './createCategory.DTO';
import { verifyIfParamExists } from '../../../../../config/utils/verifyIfParamExists';

export class CreateCategoriesUseCase {
    constructor(private categoryService: CategoryService) { }

    async exec(dto: ICreateCategoriesDTO): Promise<ICreateCategoriesResponse> {
        const { name, icon } = dto;

        verifyIfParamExists({ param: name, paramName: 'name' });
        verifyIfParamExists({ param: icon, paramName: 'icon' });

        const category = await this.categoryService.create({ name, icon });

        return category;
    }
}