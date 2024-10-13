import { Router } from "express";
import { validateRequest } from "#middleware";
import { PhoneSchema } from "#schemas";
import { PhoneController } from "#controllers";

export const PhoneRoute = Router();
PhoneRoute.post("/phones", validateRequest(PhoneSchema), PhoneController.postPhone);
PhoneRoute.get("/phones/:cpf", PhoneController.getPhonesByCpf);
