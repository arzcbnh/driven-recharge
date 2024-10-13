import { Router } from "express";
import { validateRequest } from "#middleware";
import { PhoneSchema } from "#schemas";
import { phonesController } from "#controllers";

export const phonesRoute = Router();
phonesRoute.post("/phones", validateRequest(PhoneSchema), phonesController.postPhones);
