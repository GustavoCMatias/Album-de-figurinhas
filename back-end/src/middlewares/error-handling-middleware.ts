import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { ApplicationError } from '../protocols'; 

export function handleApplicationErrors(
  err: ApplicationError | Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) {
  // if (err.name === 'CannotEnrollBeforeStartDateError') {
  //   return res.status(httpStatus.BAD_REQUEST).send({
  //     message: err.message,
  //   });
  // }
  if (err.name === 'ForbiddenError') {
    return res.status(httpStatus.FORBIDDEN).send({
      message: err.message,
      name: err.name
    });
  }
  if (err.name === 'NotFoundError') {
    return res.status(httpStatus.NOT_FOUND).send({
      message: err.message,
      name: err.name
    });
  }
  if (err.name === 'DuplicatedEmailError') {
    return res.status(httpStatus.CONFLICT).send({
      message: err.message,
      name: err.name
    });
  }
  if (err.name === 'DuplicatedUsernameError') {
    return res.status(httpStatus.CONFLICT).send({
      message: err.message
    });
  }
  

  res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
    error: 'InternalServerError',
    message: err.message,
  });
}
