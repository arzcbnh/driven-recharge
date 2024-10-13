import { CarrierDbEntry } from "#protocols";
import { database } from "./database.js";

function selectCarrier(column: "id" | "code", value: number) {
    return database.query<CarrierDbEntry>(`SELECT * FROM carriers WHERE $1 = $2;`, [column, value]);
}

export const CarrierRepository = {
    selectCarrier,
};
