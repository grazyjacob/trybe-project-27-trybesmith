export default interface TToken {
  payload: {
    id: number;
    name: string;
    email: string;
    password: string;
  };
  iat: number;
  exp: number;
}
