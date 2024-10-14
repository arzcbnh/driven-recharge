import { PhoneService } from "#services";
import { Request, Response } from "express";

async function getSummary(req: Request, res: Response) {
    const summary = await PhoneService.generateSummary(req.params.cpf);
    res.send(summary);
}

export const SummaryController = {
    getSummary,
};
