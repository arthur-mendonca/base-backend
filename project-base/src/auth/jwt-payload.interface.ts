// Interface do payload JWT (semelhante ao anterior, mas aqui com username)
export interface JwtPayload {
  username: string;
  sub: number; // ID do usuário
}
