import connection from './connection';

export async function getAll() {
  const query = `
  SELECT O.id, O.user_id AS userId, JSON_ARRAYAGG(P.id) AS productsIds 
  FROM Trybesmith.orders AS O
  INNER JOIN Trybesmith.products AS P
  ON O.id = P.order_id 
  GROUP BY O.id
  ORDER BY O.id;`;
  const [result] = await connection.execute(query);
  return result;
}
  
export async function nuso() {
  return 'asdonfasnaj';
}