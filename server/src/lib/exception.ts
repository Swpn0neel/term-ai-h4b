export class HttpException extends Error {
    public readonly status: number;
    public readonly message: string;

    constructor(status: number, message: string, details?: any) {
        super(message);
        this.status = status;
        this.message = message;

        Object.defineProperty(this, 'stack', {
            value: Error.captureStackTrace(this, this.constructor),
            writable: true,
            configurable: true,
        });
    }
}