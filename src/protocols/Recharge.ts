export interface RechargeRequest {
    phone_id: number;
    value: number;
}

export interface RechargeDbEntry extends RechargeRequest {
    id: number;
    date: string;
}
