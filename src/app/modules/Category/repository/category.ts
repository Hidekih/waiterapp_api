export interface ICategory {
    _id: string;
    name: string;
    icon: string;
    createdAt: Date;
}

export type ICreateCategory = Omit<ICategory, '_id' | 'createdAt'>;

export interface ICategoryRepository {
    create(param: ICreateCategory): Promise<ICategory>;
    readList(): Promise<Array<ICategory>>;
}