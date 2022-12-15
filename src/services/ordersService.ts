import ordersModel from '../models/ordersModel';

export async function getAll() {
  const result = await ordersModel();
  return { status: 200, result };
}

export async function nuso() {
  return 'asdonfasnaj';
}