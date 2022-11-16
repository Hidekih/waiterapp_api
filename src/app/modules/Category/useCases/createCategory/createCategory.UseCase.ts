import { AppError } from '../../../../../config/AppError';
import { CategoryService } from '../../repository/category.service';
import { ICreateCategoriesDTO, ICreateCategoriesResponse } from './createCategory.DTO';

export class CreateCategoriesUseCase {
    constructor(private categoryService: CategoryService) { }

    async exec(dto: ICreateCategoriesDTO): Promise<ICreateCategoriesResponse> {
        const { name, icon } = dto;

        this.verifyIfParamExists({ param: name, paramName: 'name' });
        this.verifyIfParamExists({ param: icon, paramName: 'icon' });

        const category = await this.categoryService.create({ name, icon });

        return category;
    }

    private verifyIfParamExists<T>(params: {
        param: T; paramName: string;
    }): void {
        const { param, paramName } = params;

        if (param == null) {
            throw new AppError({
                message: `Parameter "${paramName}" is required!`,
                ptMessage: `O parâmetro "${paramName}" é obrigatório!`
            });
        }
    }
}