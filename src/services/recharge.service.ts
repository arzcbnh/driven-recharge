import { PhoneNotFoundError } from "#error";
import { RechargeRequest } from "#protocols";
import { RechargeRepository } from "#repositories";
import { PhoneService } from "#services";

async function createRecharge(req: RechargeRequest) {
    const phones = await PhoneService.readPhones("id", req.phone_id);

    if (phones[0] == null) {
        throw new PhoneNotFoundError(req.phone_id);
    }

    return RechargeRepository.insertRecharge(req);
}

async function readRecharges(number: string) {
    const res = await RechargeRepository.selectRecharges(number);
    return res.rows;
}

export const RechargeService = {
    createRecharge,
    readRecharges,
};
