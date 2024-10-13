import { PhoneDatabaseEntry } from "#protocols";
import { database } from "./database.js";

function selectPhones(column: "id" | "number" | "cpf", value: number | string) {
    return database.query<PhoneDatabaseEntry>(`SELECT * FROM phones WHERE $1 = $2;`, [column, value]);
}

function insertPhone({ name, description, carrier_id, number, cpf }: Omit<PhoneDatabaseEntry, "id">) {
    return database.query(
        `
        INSERT INTO phones (name, description, carrier_id, number, cpf)
        VALUES ($1, $2, $3, $4, $5)
        `,
        [name, description, carrier_id, number, cpf]
    );
}

export const phonesRepository = {
    selectPhones,
    insertPhone,
};
