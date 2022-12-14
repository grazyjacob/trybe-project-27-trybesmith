import { Request, Response } from 'express';
import { TUser } from '../types';
import * as usersService from '../services/usersService';

export async function create(req: Request, res: Response) {
  console.log('CONTROLLER');
  const user = req.body as TUser;
  const { status, token } = await usersService.createUser(user);
  return res.status(status).json({ token });
}

export async function defina() {
  return 'aind n uso';
}