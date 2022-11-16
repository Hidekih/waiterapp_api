import { Product } from '../../../models/Product';
import { ICreateProduct, IProduct, IProductRepository } from './product';

export class ProductService implements IProductRepository{
    async create(params: ICreateProduct): Promise<IProduct> {
        const product = await Product.create(params);

        return product.toObject();
    }
    async readList(params: { categoryId?: string; }): Promise<IProduct[]> {
        const { categoryId } = params;

        let pipeline = {};
        if (categoryId != null) {
            pipeline = { category: categoryId };
        }

        const products = await Product.find(pipeline);

        return products.map((p) => p.toObject()) ?? [];
    }
}