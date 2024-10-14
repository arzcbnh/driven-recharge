export type RechargeRequest = {
    phone_id: number;
    value: number;
};

export type RechargeDbEntry = RechargeRequest & {
    id: number;
    date: string;
};
