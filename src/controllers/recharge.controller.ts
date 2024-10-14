import { Request, Response } from "express";
import httpStatus from "http-status";
import { RechargeService } from "#services";

async function postRecharge(req: Request, res: Response) {
    await RechargeService.createRecharge(req.body);
    res.status(httpStatus.CREATED);
}

async function getRechargesByNumber(req: Request, res: Response) {
    const recharges = await RechargeService.readRecharges(req.params.number);
    res.send(recharges);
}

export const RechargeController = {
    postRecharge,
    getRechargesByNumber,
};
