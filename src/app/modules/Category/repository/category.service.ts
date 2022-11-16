import { Category } from '../../../models/Category';
import { ICategory, ICreateCategory, ICategoryRepository } from './category';

export class CategoryService implements ICategoryRepository {
    async create(params: ICreateCategory): Promise<ICategory> {
        const category = await Category.create(params);

        return category.toObject();
    }
    async readList(): Promise<ICategory[]> {
        const categories = await Category.find();

        return categories.map((c) => c.toObject()) ?? [];
    }
}