import { AlreadyStoredError, CarrierNotFoundError, ExceededStorageError } from "#error";
import { PhoneDatabaseEntry, PhoneHydrated, PhoneRegistryRequest, RechargeDbEntry, Summary } from "#protocols";
import { PhoneRepository } from "#repositories";
import { CarrierService, RechargeService } from "#services";

async function registerPhone({ name, description, carrier, number, cpf }: PhoneRegistryRequest) {
    if (await isAlreadyStored(number)) {
        throw new AlreadyStoredError(number);
    }

    if (await isExceedingStorage(cpf)) {
        throw new ExceededStorageError(cpf);
    }

    if (!CarrierService.isCarrier(carrier)) {
        throw new CarrierNotFoundError(carrier);
    }

    const carrier_id = (await CarrierService.readCarrier("code", carrier)).id;

    return PhoneRepository.insertPhone({
        name,
        description,
        number,
        cpf,
        carrier_id,
    });
}

async function readPhones(column: "id" | "number" | "cpf", value: number | string) {
    const res = await PhoneRepository.selectPhones(column, value);
    return res.rows;
}

async function generateSummary(cpf: string): Promise<Summary> {
    function transformRecharge(recharge: RechargeDbEntry) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { phone_id, ...transformedRecharge } = recharge;
        return transformedRecharge;
    }

    async function hydratePhone(phone: PhoneDatabaseEntry): Promise<PhoneHydrated> {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { carrier_id, cpf, ...transformedPhone } = phone;
        const recharges = await RechargeService.readRecharges(phone.number);

        return {
            ...transformedPhone,
            carrier: await CarrierService.readCarrier("id", carrier_id),
            recharges: recharges.map(transformRecharge),
        };
    }

    const phones = await readPhones("cpf", cpf);
    const hydratedPhones = await Promise.all(phones.map(hydratePhone));

    return {
        document: cpf,
        phones: hydratedPhones,
    };
}

async function isAlreadyStored(number: string) {
    const res = await PhoneRepository.selectPhones("number", number);
    return res.rowCount !== 0;
}

async function isExceedingStorage(cpf: string) {
    const res = await PhoneRepository.selectPhones("cpf", cpf);
    return res.rowCount === 3;
}

export const PhoneService = {
    registerPhone,
    readPhones,
    isAlreadyStored,
    generateSummary,
};
