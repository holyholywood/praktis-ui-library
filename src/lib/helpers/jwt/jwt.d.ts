export type jwt = string;

export type temporaryJWTBodyType = {
  token_type: "access" | "refresh";
  exp: number;
  jti: string;
  user_id: number;
};
