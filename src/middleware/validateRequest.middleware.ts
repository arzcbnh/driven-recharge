import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { Schema } from "joi";

export function validateRequest(schema: Schema) {
    return (req: Request, res: Response, next: NextFunction) => {
        const result = schema.validate(req.body, { abortEarly: false });

        if (result.error != null) {
            const messages = result.error.details.map(detail => detail.message);
            res.status(httpStatus.UNPROCESSABLE_ENTITY).send(messages);
            return;
        }

        req.body = result.value;
        next();
    };
}
