import { rechargesController } from "#controllers";
import { validateRequest } from "#middleware";
import { RechargeSchema } from "#schemas";
import { Router } from "express";

export const rechargesRoute = Router();
rechargesRoute.post("/recharges", validateRequest(RechargeSchema), rechargesController.postRecharge);
