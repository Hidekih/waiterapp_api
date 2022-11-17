import { AppError } from '../AppError';

export function verifyIfParamExists<T>(params: {
    param: T; paramName: string;
}): void {
    const { param, paramName } = params;

    if (param == null) {
        throw new AppError({
            message: `Parameter "${paramName}" is required!`,
            ptMessage: `O parâmetro "${paramName}" é obrigatório!`
        });
    }
}