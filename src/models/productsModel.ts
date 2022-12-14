import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import { TProducts } from '../types';

export async function createProduct(product: TProducts):
Promise<TProducts> {
  const { name, amount } = product;
  const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)';
  const values = [name, amount];
  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId } = result;
  const newProduct: TProducts = { id: insertId, name, amount };
  return newProduct;
}

export async function getByName(name: string) {
  const query = 'SELECT * FROM Trybesmith.products WHERE name = ?';
  const value = name;
  const [data] = await connection.execute(query, value);
  const [user] = data as TProducts[];

  return user || null;
}

export async function getAll() {
  const query = 'SELECT * FROM Trybesmith.products';
  const [result] = await connection.execute(query);
  return result;
}