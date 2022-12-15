import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import { TUser } from '../types';

const checkString = Joi.string();
const checkNumber = Joi.number();
const checkLevel = Joi.number().min(1);

export async function validateUsername(req: Request, res: Response, next: NextFunction) {
  const { username } = req.body as TUser;
  if (!username) return res.status(400).json({ message: '"username" is required' });
  if (checkString.validate(username).error) {
    return res
      .status(422).json({ message: '"username" must be a string' });
  }
  if (username.length <= 2) {
    return res
      .status(422).json({ message: '"username" length must be at least 3 characters long' });
  }
  next();
}

export async function validateVocation(req: Request, res: Response, next: NextFunction) {
  const { vocation } = req.body as TUser;
  if (!vocation) return res.status(400).json({ message: '"vocation" is required' });
  if (checkString.validate(vocation).error) {
    return res
      .status(422).json({ message: '"vocation" must be a string' });
  }
  if (vocation.length <= 2) {
    return res
      .status(422).json({ message: '"vocation" length must be at least 3 characters long' });
  }
  next();
}

export async function validateLevel(req: Request, res: Response, next: NextFunction) {
  const { level } = req.body as TUser;
  if (level === undefined) return res.status(400).json({ message: '"level" is required' });
  if (checkNumber.validate(level).error) {
    return res.status(422).json({ message: '"level" must be a number' });
  }
  if (checkLevel.validate(level).error) {
    return res.status(422).json({ message: '"level" must be greater than or equal to 1' });
  }
  next();
}

export async function validatePassword(req: Request, res: Response, next: NextFunction) {
  const { password } = req.body as TUser;
  if (!password) return res.status(400).json({ message: '"password" is required' });
  if (checkString.validate(password).error) {
    return res
      .status(422).json({ message: '"password" must be a string' });
  }
  if (password.length < 8) {
    return res
      .status(422).json({ message: '"password" length must be at least 8 characters long' });
  }
  next();
}