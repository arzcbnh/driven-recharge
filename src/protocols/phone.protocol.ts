export type PhoneBase = {
    name: string;
    description: string;
    number: string;
    cpf: string;
};

export type PhoneRegistryRequest = PhoneBase & {
    carrier: 15 | 21 | 31 | 41;
};

export type PhoneDatabaseEntry = PhoneBase & {
    id: number;
    carrier_id: number;
};
