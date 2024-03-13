import type { Request, Response, NextFunction } from "express";

type AsyncRequestHandler = (
  req: Request,
  res: Response,
  next?: NextFunction,
) => Promise<void>;

/**
 * Wraps an asynchronous request handler inside a try-catch block and calls
 * the next function if an error is thrown.
 *
 * Intended for Express.js applications.
 *
 * @function
 */
export const catchErrors = (asyncFn: AsyncRequestHandler) => {
  return async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      await asyncFn(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};
