import jwt from 'jsonwebtoken';
import { secret, config } from '../middlewares/jwtConfig';
import loginModel from '../models/loginModel';
import { TLogin } from '../types';

export default async function login(user: TLogin) {
  if (!user.username) {
    return { status: 400, message: '"username" is required' };
  } if (!user.password) {
    return { status: 400, message: '"password" is required' };
  }
  const payload = await loginModel(user);
  if (payload === null) return { status: 401, message: 'Username or password invalid' };
  const token = await jwt.sign({ payload }, secret, config);
  return { status: 200, token };
}