export interface Phone {
    name: string;
    description: string;
    carrier: "15" | "21" | "31" | "41";
    number: string;
    cpf: string;
}

interface PhoneBase {
    name: string;
    description: string;
    number: string;
    cpf: string;
}

export interface PhoneRegistryRequest extends PhoneBase {
    carrier: "15" | "21" | "31" | "41";
}

export interface PhoneQueryResult extends PhoneBase {
    id: number;
    carrier_id: number;
}
