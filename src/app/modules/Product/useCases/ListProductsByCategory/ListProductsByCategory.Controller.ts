import { Request, Response } from 'express';

import { IAppError } from '../../../../../config/AppError';
import { IListProductsByCategoryDTO } from './ListProductsByCategory.DTO';
import { ListProductsByCategoryUseCase } from './ListProductsByCategory.UseCase';

export class ListProductsByCategoryController {
    constructor (private listProductsByCategoryUseCase: ListProductsByCategoryUseCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const dto = req.query as unknown as IListProductsByCategoryDTO;

            const result = await this.listProductsByCategoryUseCase.exec(dto);

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