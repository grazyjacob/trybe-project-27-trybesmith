import { Request, Response } from 'express';
import { TUser } from '../types';
import usersService from '../services/usersService';

export default async function create(req: Request, res: Response) {
  const user = req.body as TUser;
  const { status, token } = await usersService(user);
  return res.status(status).json({ token });
}
