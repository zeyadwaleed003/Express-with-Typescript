import { NextFunction, Request, Response } from 'express';
import {
  CreateUserQueryParams,
  CreateUserRequest,
  User,
} from '../interfaces/user.interface';

export const getUsers = (req: Request, res: Response, next: NextFunction) => {
  // const customField: string = req.customField;

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
  res: Response<User>,
  next: NextFunction
) => {
  const email: string = req.body.email;
  const password: string = req.body.password;
  const isLoggedIn: boolean = req.query.loginAfterCreate;

  res.status(201).json({
    id: 1,
    username: 'blabla',
    email: 'blabla@gmail.com',
  });
};
