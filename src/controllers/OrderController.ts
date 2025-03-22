import { Request, Response } from "express";
import { db } from "../config/database";
import { orders } from "../domain/Order";
import { eq } from "drizzle-orm";
import { validate as isUuid } from "uuid"; 

export class OrderController {
  async listAll(request: Request, response: Response) {
    const result = await db.select().from(orders);
    return response.json(result);
  }

  async getById(request: Request, response: Response) {
    const { id } = request.params;

    if (!isUuid(id)) {
      return response.status(400).json({ message: "ID inválido. Deve ser um UUID." });
    }

    const [order] = await db.select().from(orders).where(eq(orders.id, id));
    if (!order) {
      return response.status(404).json({ message: "Pedido não encontrado" });
    }

    return response.json(order);
  }
}
