import { Phone, PhoneDatabaseEntry } from "#protocols";
import { database } from "./database.js";

function selectPhoneByNumber(number: string) {
    return database.query<Phone>(`SELECT * FROM phones WHERE number = $1`, [number]);
}

function selectPhoneById(id: number) {
    return database.query<Phone>(`SELECT * FROM phones WHERE id = $1`, [id])
}

function selectPhonesByCpf(cpf: string) {
    return database.query<Phone>(`SELECT * FROM phones WHERE cpf = $1`, [cpf]);
}

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
    selectPhoneByNumber,
    selectPhonesByCpf,
    selectPhoneById,
    selectPhones,
    insertPhone,
};
