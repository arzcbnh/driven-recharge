import { PhoneDbEntry } from "#protocols";
import { database } from "./database.js";

function selectPhones(column: "id" | "number" | "cpf", value: number | string) {
    return database.query<PhoneDbEntry>(`SELECT * FROM phones WHERE $1 = $2;`, [column, value]);
}

function insertPhone({ name, description, carrier_id, number, cpf }: Omit<PhoneDbEntry, "id">) {
    return database.query(
        `
        INSERT INTO phones (name, description, carrier_id, number, cpf)
        VALUES ($1, $2, $3, $4, $5)
        `,
        [name, description, carrier_id, number, cpf]
    );
}

export const PhoneRepository = {
    selectPhones,
    insertPhone,
};
