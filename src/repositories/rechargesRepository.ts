import { Recharge } from "#protocols";
import { database } from "./database.js";

function insertRecharge({phone_id, value}: Recharge) {
    const date = new Date().toISOString().slice(0, 10);
    return database.query(`INSERT INTO recharges (phone_id, value, date)
        VALUES ($1, $2, $3);`, [phone_id, value, date]);
}

export const rechargesRepository = {
    insertRecharge,
}
