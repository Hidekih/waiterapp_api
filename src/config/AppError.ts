export interface IAppError {
	ptMessage?: string;
	message?: string;
    errorStatusCode?: number;
}

export class AppError extends Error implements IAppError{
    ptMessage?: string;
    errorStatusCode?: number;

    constructor(errorData: IAppError) {
        super(errorData.message);

        this.ptMessage = errorData.ptMessage;
        this.errorStatusCode = errorData.errorStatusCode;
    }
}