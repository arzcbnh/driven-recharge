import { Request, Response } from "express";
import httpStatus from "http-status";
import { RechargeService } from "#services";

async function postRecharge(req: Request, res: Response) {
    await RechargeService.createRecharge(req.body);
    res.status(httpStatus.CREATED);
}

export const RechargeController = {
    postRecharge,
};
