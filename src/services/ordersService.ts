import ordersModel from '../models/ordersModel';

export default async function getAll() {
  const result = await ordersModel();
  return { status: 200, result };
}
