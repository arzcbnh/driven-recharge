export class ConflictError extends Error {
    constructor(message: string) {
        super(message);
    }
}

export class AlreadyStoredError extends ConflictError {
    constructor(number: string) {
        super(`Phone ${number} is already registered.`);
    }
}

export class ExceededStorageError extends ConflictError {
    constructor(cpf: string) {
        super(`CPF ${cpf} already has three phones registered.`);
    }
}

export class NotFoundError extends Error {
    constructor(message: string) {
        super(message);
    }
}

export class CarrierNotFoundError extends NotFoundError {
    constructor(code: number) {
        super(`Carrier with code ${code} not found.`);
    }
}

export class PhoneNotFoundError extends NotFoundError {
    constructor(id: number | string) {
        super(`Phone with id ${id} not found.`);
    }
}

export class UnprocessableEntityError extends Error {
    constructor(message: string) {
        super(message);
    }
}
