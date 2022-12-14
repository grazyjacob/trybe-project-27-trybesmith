import { Request, Response } from 'express';
import { TProducts } from '../types';
import * as productsService from '../services/productsService';

export async function create(req: Request, res: Response) {
  const product = req.body as TProducts;
  const { status, result } = await productsService.create(product);
  return res.status(status).json(result);
}

export async function getAllProducts() {
  return 'ainda n funciona';
}