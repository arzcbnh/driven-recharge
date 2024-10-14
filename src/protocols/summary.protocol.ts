import { CarrierDbEntry } from "./carrier.protocol.js";
import { PhoneBase } from "./phone.protocol.js";
import { RechargeDbEntry } from "./recharge.protocol.js";

export type Summary = {
    document: string;
    phones: PhoneBase[];
    carrier: CarrierDbEntry;
    recharges: Omit<RechargeDbEntry, "phone_id">[];
}
