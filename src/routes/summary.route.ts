import { Router } from "express";

export const SummaryRoute = Router();
SummaryRoute.get("/summary/:document");
