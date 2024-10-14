import { AlreadyStoredError, CarrierNotFoundError, ExceededStorageError } from "#error";
import { PhoneDbEntry, PhoneHydrated, PhoneRegistryRequest, RechargeDbEntry, Summary } from "#protocols";
import { PhoneRepository } from "#repositories";
import { CarrierService, RechargeService } from "#services";

async function registerPhone({ name, description, carrier, number, document }: PhoneRegistryRequest) {
    if (await isAlreadyStored(number)) {
        throw new AlreadyStoredError(number);
    }

    if (await isExceedingStorage(document)) {
        throw new ExceededStorageError(document);
    }

    if (!CarrierService.isCarrier(carrier)) {
        throw new CarrierNotFoundError(carrier);
    }

    const carrier_id = (await CarrierService.readCarrier("code", carrier)).id;

    return PhoneRepository.insertPhone({
        name,
        description,
        number,
        document,
        carrier_id,
    });
}

async function readPhones(column: "id" | "number" | "document", value: number | string) {
    const res = await PhoneRepository.selectPhones(column, value);
    return res.rows;
}

async function generateSummary(document: string): Promise<Summary> {
    function transformRecharge(recharge: RechargeDbEntry) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { phone_id, ...transformedRecharge } = recharge;
        return transformedRecharge;
    }

    async function hydratePhone(phone: PhoneDbEntry): Promise<PhoneHydrated> {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { carrier_id, document, ...transformedPhone } = phone;
        const recharges = await RechargeService.readRecharges(phone.number);

        return {
            ...transformedPhone,
            carrier: await CarrierService.readCarrier("id", carrier_id),
            recharges: recharges.map(transformRecharge),
        };
    }

    const phones = await readPhones("document", document);
    const hydratedPhones = await Promise.all(phones.map(hydratePhone));

    return {
        document: document,
        phones: hydratedPhones,
    };
}

async function isAlreadyStored(number: string) {
    const res = await PhoneRepository.selectPhones("number", number);
    return res.rowCount !== 0;
}

async function isExceedingStorage(document: string) {
    const res = await PhoneRepository.selectPhones("document", document);
    return res.rowCount === 3;
}

export const PhoneService = {
    registerPhone,
    readPhones,
    isAlreadyStored,
    generateSummary,
};
