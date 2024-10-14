import { NextFunction, Request, Response } from "express";
import http from "http-status";
import { Schema } from "joi";

export function validateRequest(schema: Schema) {
    return (req: Request, res: Response, next: NextFunction) => {
        const result = schema.validate(req.body);

        if (result.error == null) {
            req.body = result.value;
            return next();
        }

        const messages = result.error.details.map(detail => detail.message);
        res.status(http.UNPROCESSABLE_ENTITY).send(messages);
    };
}
