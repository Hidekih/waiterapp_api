import { Request, Response } from 'express';

import { IAppError } from '../../../../../config/AppError';
import { ListCategoriesUseCase } from './listCategories.UseCase';

export class ListCategoriesController {
    constructor (private listCategoriesUseCase: ListCategoriesUseCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const result = await this.listCategoriesUseCase.exec();

            return res.status(200).send(result);
        } catch (error: unknown) {
            const { errorStatusCode, message, ptMessage } = error as IAppError;

            return  res.status(errorStatusCode ?? 500).json({
                message,
                ptMessage
            });
        }
    }
}