import { RechargeController } from "#controllers";
import { validateRequest } from "#middleware";
import { RechargeSchema } from "#schemas";
import { Router } from "express";

export const RechargeRoute = Router();
RechargeRoute.post("/recharges", validateRequest(RechargeSchema), RechargeController.postRecharge);
