import { Request, Response } from 'express';
import { ListCategoriesUseCase } from './listCategories.UseCase';

export class ListCategoriesController {
    constructor (private listCategoriesUseCase: ListCategoriesUseCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const result = await this.listCategoriesUseCase.exec();

            return res.send(result);
        } catch (error: any) {
            return res;
        }
    }
}