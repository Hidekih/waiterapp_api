import { Request, Response } from 'express';

import { IAppError } from '../../../../../config/AppError';
import { UpdateOrderStatusUseCase } from './updateOrderStatus.UseCase';

export class UpdateOrderStatusController {
    constructor (private updateOrderStatusUseCase: UpdateOrderStatusUseCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const dto = req.body;

            const result = await this.updateOrderStatusUseCase.exec(dto);

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
