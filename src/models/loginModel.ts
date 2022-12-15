import connection from './connection';
import { TLogin } from '../types';

export default async function login(user: TLogin): Promise<TLogin | null> {
  const { username, password } = user;
  const query = `
    SELECT * FROM Trybesmith.users 
    WHERE username = ?
    AND password = ?`;
  const values = [username, password];
  const [data] = await connection.execute(query, values);
  const [result] = data as TLogin[];
  return result || null;
}
