export interface IProduct {
    _id: string;
    name: string;
    description: string;
    imagePath: string;
    price: number
    ingredients: Array<{
        name: string;
        icon: string;
    }>,
    category: string;
    createdAt: Date;
}

export type ICreateProduct = Omit<IProduct, '_id' | 'createdAt' | 'ingredients'>
    & {
        ingredients?: Array<{
            name: string;
            icon: string;
        }>,
};

export interface IProductRepository {
    create(params: ICreateProduct): Promise<IProduct>
    readList(params: { categoryId?: string }): Promise<Array<IProduct>>
}