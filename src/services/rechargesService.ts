import { PhoneNotFoundError, ValueOutOfBoundsError } from "#error";
import { RechargeRequest } from "#protocols";
import { rechargesRepository } from "#repositories";
import { PhoneService } from "./phonesService.js";

async function createRecharge(req: RechargeRequest) {
    const phones = await PhoneService.readPhones("id", req.phone_id);

    if (phones[0] == null) {
        throw new PhoneNotFoundError(req.phone_id);
    }

    if (isValueOutOfBounds(req.value)) {
        throw new ValueOutOfBoundsError(req.value);
    }

    return rechargesRepository.insertRecharge(req);
}

function isValueOutOfBounds(value: number) {
    return value < 10 || value > 1000;
}

export const RechargeService = {
    createRecharge,
};
