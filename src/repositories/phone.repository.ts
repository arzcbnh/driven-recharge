import { PhoneDbEntry } from "#protocols";
import { database } from "./database.js";

function selectPhones(column: "id" | "number" | "document", value: number | string) {
    return database.query<PhoneDbEntry>(`SELECT * FROM phones WHERE $1 = $2;`, [column, value]);
}

function insertPhone({ name, description, carrier_id, number, document }: Omit<PhoneDbEntry, "id">) {
    return database.query(
        `
        INSERT INTO phones (name, description, carrier_id, number, document)
        VALUES ($1, $2, $3, $4, $5)
        `,
        [name, description, carrier_id, number, document]
    );
}

export const PhoneRepository = {
    selectPhones,
    insertPhone,
};
