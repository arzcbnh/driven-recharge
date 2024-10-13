import { Router } from "express";
import { validateRequest } from "#middleware";
import { PhoneSchema } from "#schemas";
import { phonesController } from "#controllers";

export const PhoneRoute = Router();
PhoneRoute.post("/phones", validateRequest(PhoneSchema), phonesController.postPhones);
PhoneRoute.get("/phones/:cpf", phonesController.getPhonesByCpf);
