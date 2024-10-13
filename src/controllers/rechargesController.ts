import { Request, Response } from "express";
import httpStatus from "http-status";
import { rechargesService } from "#services";

async function postRecharge(req: Request, res: Response) {
    await rechargesService.createRecharge(req.body);
    res.status(httpStatus.CREATED);
}

export const RechargeController = {
    postRecharge,
}
