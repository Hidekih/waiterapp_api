import { Request, Response } from 'express';

import { IAppError } from '../../../../../config/AppError';
import { CreateOrderUseCase } from './createOrder.UseCase';

export class CreateOrderController {
    constructor (private createOrderUseCase: CreateOrderUseCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const dto = req.body;

            const result = await this.createOrderUseCase.exec(dto);

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
