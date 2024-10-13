import { Phone } from "#protocols";
import { phonesService } from "#services";
import { Request, Response } from "express";
import httpStatus from "http-status";

async function postPhones(req: Request, res: Response) {
    await phonesService.registerPhone(req.body as Phone);
    res.sendStatus(httpStatus.CREATED);
}

export const phonesController = {
    postPhones,
};
