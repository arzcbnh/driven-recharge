import { Router } from "express";
import { validateRequest } from "#middleware";
import { PhoneSchema } from "#schemas";

export const phonesRoute = Router();
phonesRoute.post("/phones", validateRequest(PhoneSchema));
