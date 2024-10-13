import { NextFunction, Request, Response } from "express";
import { UNPROCESSABLE_ENTITY } from "http-status";
import { Schema } from "joi";

export function validateRequest(schema: Schema) {
    return (req: Request, res: Response, next: NextFunction) => {
        const result = schema.validate(req.body);

        if (result.error == null) {
            return next();
        }

        const messages = result.error.details.map(detail => detail.message);
        res.status(UNPROCESSABLE_ENTITY).send(messages);
    };
}
