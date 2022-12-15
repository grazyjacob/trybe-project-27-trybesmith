import { Request, Response } from 'express';
import loginService from '../services/loginService';
import { TLogin } from '../types';

export default async function login(req: Request, res: Response) {
  const user = req.body as TLogin;
  const { status, token, message } = await loginService(user);
  if (message) return res.status(status).json({ message });
  return res.status(status).json({ token });
}