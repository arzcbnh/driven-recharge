import { Phone } from "#protocols";
import { database } from "./database.js";

function selectPhoneByNumber(number: string) {
    return database.query(`SELECT * FROM phones WHERE number = $1`, [number]);
}

function selectPhonesByCpf(cpf: string) {
    return database.query(`SELECT * FROM phones WHERE cpf = $1`, [cpf]);
}

function insertPhone({ name, description, carrier, number, cpf }: Phone) {
    return database.query(
        `
        INSERT INTO phones (name, description, carrier, number, cpf)
        VALUES ($1, $2, $3, $4, $5)
        `,
        [name, description, carrier, number, cpf]
    );
}

export const phonesRepository = {
    selectPhoneByNumber,
    selectPhonesByCpf,
    insertPhone,
};
