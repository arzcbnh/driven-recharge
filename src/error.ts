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
