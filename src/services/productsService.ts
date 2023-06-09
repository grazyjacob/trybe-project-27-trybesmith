import * as productsModel from '../models/productsModel';
import { TProducts } from '../types';

export async function create(product: TProducts) {
  const result = await productsModel.createProduct(product);
  return { status: 201, result };
} 

export async function getAllProducts() {
  const result = await productsModel.getAll();
  return { status: 200, result };
}