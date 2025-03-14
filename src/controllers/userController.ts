import { NextFunction, Request, Response } from 'express';
import {
  CreateUserQueryParams,
  CreateUserRequest,
} from '../interfaces/user.interface';

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

export const createUser = (
  req: Request<{}, {}, CreateUserRequest, CreateUserQueryParams>,
  res: Response,
  next: NextFunction
) => {
  const email: string = req.body.email;
  const password: string = req.body.password;
  const isLoggedIn: boolean = req.query.loginAfterCreate;
};
