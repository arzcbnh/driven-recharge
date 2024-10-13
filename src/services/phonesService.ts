import { AlreadyStoredError, ExceededStorageError } from "#error";
import { PhoneRegistryRequest } from "#protocols";
import { phonesRepository } from "#repositories";
import { CarrierService } from "#services";

async function registerPhone({ name, description, carrier, number, cpf }: PhoneRegistryRequest) {
    if (await isAlreadyStored(number)) {
        throw new AlreadyStoredError(number);
    }

    if (await isExceedingStorage(cpf)) {
        throw new ExceededStorageError(cpf);
    }

    const carrier_id = (await CarrierService.readCarrier("code", carrier)).id;

    return phonesRepository.insertPhone({
        name,
        description,
        number,
        cpf,
        carrier_id,
    });
}

async function readPhones(column: "id" | "number" | "cpf", value: number | string) {
    const res = await phonesRepository.selectPhones(column, value);
    return res.rows;
}

async function isAlreadyStored(number: string) {
    const res = await phonesRepository.selectPhones("number", number);
    return res.rowCount !== 0;
}

async function isExceedingStorage(cpf: string) {
    const res = await phonesRepository.selectPhones("cpf", cpf);
    return res.rowCount === 3;
}

export const phonesService = {
    registerPhone,
    readPhones,
    isAlreadyStored,
};
