import { AlreadyStoredError, ExceededStorageError } from "#error";
import { Phone } from "#protocols";
import { phonesRepository } from "#repositories";

async function registerPhone(data: Phone) {
    if (await isAlreadyStored(data.number)) {
        throw new AlreadyStoredError(data.number);
    }

    if (await isExceedingStorage(data.cpf)) {
        throw new ExceededStorageError(data.cpf);
    }

    return phonesRepository.insertPhone(data);
}

async function readPhones(cpf: string) {
    const res = await phonesRepository.selectPhonesByCpf(cpf);
    return res.rows;
}

async function readPhoneById(id: number) {
    const res = await phonesRepository.selectPhoneById(id);
    return res.rows[0];
}

async function isAlreadyStored(number: string) {
    const res = await phonesRepository.selectPhoneByNumber(number);
    return res.rowCount !== 0;
}

async function isExceedingStorage(cpf: string) {
    const res = await phonesRepository.selectPhonesByCpf(cpf);
    return res.rowCount === 3;
}

export const phonesService = {
    registerPhone,
    readPhones,
    readPhoneById,
    isAlreadyStored,
};
