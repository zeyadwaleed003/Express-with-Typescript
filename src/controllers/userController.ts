import { NextFunction, Request, Response } from 'express';

export const getUsers = (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    status: 'success',
    data: 'Some Users',
  });
};

export const getUser = (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    status: 'success',
    data: 'One User',
  });
};
