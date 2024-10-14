import { PhoneRegistryRequest } from "#protocols";
import { PhoneService } from "#services";
import { Request, Response } from "express";
import httpStatus from "http-status";

async function postPhone(req: Request, res: Response) {
    await PhoneService.registerPhone(req.body as PhoneRegistryRequest);
    res.sendStatus(httpStatus.CREATED);
}

async function getPhonesByDocument(req: Request, res: Response) {
    const phones = await PhoneService.readPhones("document", req.params.document);
    res.send(phones);
}

export const PhoneController = {
    postPhone,
    getPhonesByDocument,
};
