import pg from "pg";

const config = {
    connectionString: process.env.DATABASE_URL,
};

export const database = new pg.Pool(config);
