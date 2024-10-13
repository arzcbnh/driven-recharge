import { ConflictError } from "#error";
import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

export const handleError: ErrorRequestHandler = (err, req, res, next) => {
    if (err instanceof ConflictError) {
        res.status(httpStatus.CONFLICT).send(err.message);
    } else {
        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
        console.error(err);
    }
};
