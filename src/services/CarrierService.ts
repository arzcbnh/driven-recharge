import { CarrierRepository } from "#repositories";

async function readCarrier(column: "id" | "code", value: number) {
    const res = await CarrierRepository.selectCarrier(column, value);
    return res.rows[0];
}

export const CarrierService = {
    readCarrier,
}
