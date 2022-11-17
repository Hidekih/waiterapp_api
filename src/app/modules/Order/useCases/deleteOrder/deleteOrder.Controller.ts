import { Request, Response } from 'express';

import { IAppError } from '../../../../../config/AppError';
import { IDeleteOrderDTO } from './deleteOrder.DTO';
import { DeleteOrderUseCase } from './deleteOrder.UseCase';

export class DeleteOrderController {
    constructor (private deleteOrderUseCase: DeleteOrderUseCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const dto = req.params as IDeleteOrderDTO;

            const result = await this.deleteOrderUseCase.exec(dto);

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
