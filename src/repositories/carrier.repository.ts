import { database } from "./database.js";

function selectCarrier(id: number) {
    return database.query(`SELECT * FROM carriers WHERE id = $1;`, [id]);
}

export const CarrierRepository = {
    selectCarrier,
};
