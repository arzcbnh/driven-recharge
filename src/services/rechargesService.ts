import { PhoneNotFoundError, ValueOutOfBoundsError } from "#error";
import { Recharge } from "#protocols";
import { rechargesRepository } from "#repositories";
import { phonesService } from "./phonesService.js";

async function createRecharge(data: Recharge) {
    if (await phonesService.readPhoneById(data.phone_id) == null) {
        throw new PhoneNotFoundError(data.phone_id);
    }

    if (isValueOutOfBounds(data.value)) {
        throw new ValueOutOfBoundsError(data.value);
    }

    return rechargesRepository.insertRecharge(data);
}

function isValueOutOfBounds(value: number) {
    return value < 10 || value > 1000;
}

export const rechargesService = {
    createRecharge,
}
