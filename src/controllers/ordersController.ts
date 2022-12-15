import { Request, Response } from 'express';
import * as ordersService from '../services/ordersService';

export async function getAllOrders(req: Request, res: Response) {
  const { status, result } = await ordersService.getAll();
  console.log('RESULT CONTROLLER', result);
  return res.status(status).json(result);
}

export async function newF() {
  return 'ainda n uso';
}