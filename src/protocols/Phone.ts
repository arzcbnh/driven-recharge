export interface Phone {
    name: string;
    description: string;
    carrier: "15" | "21" | "31" | "41";
    number: string;
    cpf: string;
}

export interface PhoneRegistryRequest {
    name: string;
    description: string;
    carrier: "15" | "21" | "31" | "41";
    number: string;
    cpf: string;
}

export interface PhoneQueryResult extends PhoneRegistryRequest {
    id: number;
}
