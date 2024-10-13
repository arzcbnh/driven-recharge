import { RechargeRequest } from "#protocols";
import Joi from "joi";

export const RechargeSchema = Joi.object<RechargeRequest>({
    phone_id: Joi.number().integer().required(),
    value: Joi.number().precision(2).min(10).max(1000).required(),
});
