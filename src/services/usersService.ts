import jwt from 'jsonwebtoken';
import { secret, config } from '../middlewares/jwtConfig';
import * as usersModel from '../models/usersModel';
import { TUser } from '../types';
// import TToken from '../types/token';

export async function createUser(user: TUser) {
  const payload = await usersModel.createUser(user);
  const token = await jwt.sign({ payload }, secret, config);
  return { status: 201, token };
}

export async function WTF() {
  return 'n funfa';
}