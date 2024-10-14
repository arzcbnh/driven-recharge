import { CarrierDbEntry } from "./carrier.protocol.js";
import { RechargeDbEntry } from "./recharge.protocol.js";

export type PhoneRegistryRequest = {
    carrier: 15 | 21 | 31 | 41;
    name: string;
    description: string;
    number: string;
    cpf: string;
};

export type PhoneDatabaseEntry = {
    id: number;
    carrier_id: number;
    name: string;
    description: string;
    number: string;
    cpf: string;
};

export type PhoneHydrated = {
    name: string;
    description: string;
    number: string;
    carrier: CarrierDbEntry;
    recharges: Omit<RechargeDbEntry, "phone_id">[];
};
