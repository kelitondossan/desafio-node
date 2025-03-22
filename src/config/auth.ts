import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const TOKEN_FIXO = "meu-token-jwt-fixo";
const SECRET = "MINHA_CHAVE_SECRETA";

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: "Token não fornecido" });
  }

  const token = authHeader.replace("Bearer ", "");
  if (token === TOKEN_FIXO) {
    return next();
  }

  try {
    jwt.verify(token, SECRET);
    return next();
  } catch (error) {
    return res.status(401).json({ message: "Token inválido" });
  }
}
