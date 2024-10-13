import { rechargesController } from "#controllers";
import { Router } from "express";

export const rechargesRoute = Router();
rechargesRoute.post("/recharges", rechargesController.postRecharge);
