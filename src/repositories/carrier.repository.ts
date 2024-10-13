import { CarrierDbEntry } from "#protocols";
import { database } from "./database.js";

function selectCarrier(id: number) {
    return database.query<CarrierDbEntry>(`SELECT * FROM carriers WHERE id = $1;`, [id]);
}

export const CarrierRepository = {
    selectCarrier,
};
