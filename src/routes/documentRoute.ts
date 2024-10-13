import { documentController } from "#controllers";
import { Router } from "express";

export const DocumentRoute = Router();
DocumentRoute.get("/:document", documentController.getDocument);
