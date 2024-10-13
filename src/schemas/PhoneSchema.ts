import joi from "joi";
import { PhoneRegistryRequest } from "#protocols";

export const PhoneSchema = joi.object<PhoneRegistryRequest>({
    name: joi.string().required(),
    description: joi.string().required(),
    number: joi
        .string()
        .pattern(/\d{11}/)
        .required(),
    carrier: joi.number().integer().required(),
    cpf: joi
        .string()
        .pattern(/\d{11}/)
        .required(),
});
