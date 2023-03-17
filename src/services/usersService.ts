import jwt from 'jsonwebtoken';
import { secret, config } from '../middlewares/jwtConfig';
import usersModel from '../models/usersModel';
import { TUser } from '../types';

export default async function createUser(user: TUser) {
  const payload = await usersModel(user);
  const token = jwt.sign({ payload }, secret, config);
  return { status: 201, token };
}
