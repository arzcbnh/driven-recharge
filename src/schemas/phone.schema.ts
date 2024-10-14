import Joi from "joi";
import { PhoneRegistryRequest } from "#protocols";

export const PhoneSchema = Joi.object<PhoneRegistryRequest>({
    name: Joi.string().required(),
    description: Joi.string().required(),
    number: Joi.string()
        .pattern(/\d{11}/)
        .required(),
    carrier: Joi.number().integer().required(),
    document: Joi.string()
        .pattern(/\d{11}/)
        .required(),
});
