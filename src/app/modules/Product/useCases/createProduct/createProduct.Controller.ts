import { Request, Response } from 'express';

import { IAppError } from '../../../../../config/AppError';
import { CreateProductUseCase } from './createProduct.UseCase';

export class CreateProductController {
    constructor (private createProductUseCase: CreateProductUseCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const dto = req.body;
            const imagePath = req.file?.filename;

            dto.imagePath = imagePath;
            dto.ingredients = typeof dto.ingredients == 'string' ? JSON.parse(dto.ingredients) : dto.ingredients;

            const result = await this.createProductUseCase.exec(dto);

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
