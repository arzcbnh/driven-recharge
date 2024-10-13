import { PhoneRegistryRequest } from "#protocols";
import { phonesService } from "#services";
import { Request, Response } from "express";
import httpStatus from "http-status";

async function postPhone(req: Request, res: Response) {
    await phonesService.registerPhone(req.body as PhoneRegistryRequest);
    res.sendStatus(httpStatus.CREATED);
}

async function getPhonesByCpf(req: Request, res: Response) {
    const phones = await phonesService.readPhones("cpf", req.params.cpf);
    res.send(phones);
}

export const PhoneController = {
    postPhone,
    getPhonesByCpf,
};
