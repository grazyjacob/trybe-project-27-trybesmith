import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';
import { TProducts } from '../types';

const checkString = Joi.string();

export async function validateName(req: Request, res: Response, next: NextFunction) {
  const product = req.body as TProducts;
  if (!product.name) return res.status(400).json({ message: '"name" is required' });
  if (checkString.validate(product.name).error) {
    return res.status(422).json({ message: '"name" must be a string' });
  }
  if (product.name.length < 2) {
    return res
      .status(422).json({ message: '"name" length must be at least 3 characters long' });
  }
  next();
}

export async function validateAmount(req: Request, res: Response, next: NextFunction) {
  const product = req.body as TProducts;
  if (!product.amount) return res.status(400).json({ message: '"amount" is required' });
  if (checkString.validate(product.amount).error) {
    return res.status(422).json({ message: '"amount" must be a string' });
  }
  if (product.amount.length < 2) {
    return res
      .status(422).json({ message: '"amount" length must be at least 3 characters long' });
  }
  next();
}