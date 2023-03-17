import { Request, Response } from 'express';
import getAll from '../services/ordersService';

export default async function getAllOrders(req: Request, res: Response) {
  const { status, result } = await getAll();
  return res.status(status).json(result);
}
