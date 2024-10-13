import { phonesService } from "#services";
import { Request, Response } from "express";

async function getDocument(req: Request, res: Response) {
    const phones = await phonesService.readPhones(req.params.document);
    res.send(phones);
}

export const documentController = {
    getDocument,
};
