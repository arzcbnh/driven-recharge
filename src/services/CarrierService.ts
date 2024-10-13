import { CarrierRepository } from "#repositories";

async function readCarrier(column: "id" | "code", value: number) {
    const res = await CarrierRepository.selectCarrier(column, value);
    return res.rows[0];
}

function isCarrier(code: number) {
    return code === 15 || code === 21 || code === 31 || code === 41;
}

export const CarrierService = {
    readCarrier,
    isCarrier,
};
