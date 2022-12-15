import { Request, Response } from 'express';
import * as ordersService from '../services/ordersService';

export default async function getAllOrders(req: Request, res: Response) {
  const { status, result } = await ordersService.getAll();
  return res.status(status).json(result);
}
