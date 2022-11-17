import { Request, Response } from 'express';

import { IAppError } from '../../../../../config/AppError';
import { IListOrdersDTO } from './listOrders.DTO';
import { ListOrdersUseCase } from './listOrders.UseCase';

export class ListOrdersController {
    constructor (private listOrdersUseCase: ListOrdersUseCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const dto = req.query as IListOrdersDTO;

            if (dto.status != null && !Array.isArray(dto.status)) dto.status = [dto.status];

            const result = await this.listOrdersUseCase.exec(dto);

            return res.status(201).json(result);
        } catch (error: unknown) {
            const { errorStatusCode, message, ptMessage } = error as IAppError;

            return  res.status(errorStatusCode ?? 500).json({
                message,
                ptMessage
            });
        }
    }
}
