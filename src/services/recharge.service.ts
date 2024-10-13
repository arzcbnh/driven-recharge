import { PhoneNotFoundError, ValueOutOfBoundsError } from "#error";
import { RechargeRequest } from "#protocols";
import { RechargeRepository } from "#repositories";
import { PhoneService } from "#services";

async function createRecharge(req: RechargeRequest) {
    const phones = await PhoneService.readPhones("id", req.phone_id);

    if (phones[0] == null) {
        throw new PhoneNotFoundError(req.phone_id);
    }

    if (isValueOutOfBounds(req.value)) {
        throw new ValueOutOfBoundsError(req.value);
    }

    return RechargeRepository.insertRecharge(req);
}

function isValueOutOfBounds(value: number) {
    return value < 10 || value > 1000;
}

export const RechargeService = {
    createRecharge,
};
