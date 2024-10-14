import { RechargeDbEntry, RechargeRequest } from "#protocols";
import { database } from "./database.js";

function insertRecharge({ phone_id, value }: RechargeRequest) {
    const date = new Date().toISOString().slice(0, 10);
    return database.query(
        `INSERT INTO recharges (phone_id, value, date)
        VALUES ($1, $2, $3);`,
        [phone_id, value, date]
    );
}

function selectRecharges(number: string) {
    return database.query<RechargeDbEntry>(`SELECT * FROM recharges WHERE number = $1;`, [number]);
}

export const RechargeRepository = {
    insertRecharge,
    selectRecharges,
};
