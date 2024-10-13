import joi from "joi";
import { Phone } from "#protocols";

export const PhoneSchema = joi.object<Phone>({
    name: joi.string().required(),
    description: joi.string().required(),
    number: joi
        .string()
        .pattern(/\d{11}/)
        .required(),
    carrier: joi.string().pattern(/\d{2}/).required(),
    cpf: joi
        .string()
        .pattern(/\d{11}/)
        .required(),
});
