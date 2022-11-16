import { Request, Response } from 'express';

import { IAppError } from '../../../../../config/AppError';
import { ListProductsUseCase } from './listProducts.UseCase';

export class ListProductsController {
    constructor (private listProductsUseCase: ListProductsUseCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const result = await this.listProductsUseCase.exec();

            return res.send(result);
        } catch (error: unknown) {
            const { errorStatusCode, message, ptMessage } = error as IAppError;

            return  res.status(errorStatusCode ?? 500).json({
                message,
                ptMessage
            });
        }
    }
}