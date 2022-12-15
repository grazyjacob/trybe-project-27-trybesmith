import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import { TUser } from '../types';

export async function createUser(user: TUser):
Promise<TUser> {
  const { username, vocation, level, password } = user;
  const query = `INSERT INTO Trybesmith.users
  (username, vocation, level, password) VALUES (?, ?, ?, ?)`;
  const values = [username, vocation, level, password];
  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId } = result;
  const newProduct: TUser = { id: insertId, username, vocation, level, password };
  return newProduct;
}

export async function WTF() {
  return 'hello';
}