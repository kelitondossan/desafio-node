import { Request, Response } from "express";
import { CreateOrderUseCase } from "./CreateOrderUseCase";

export class CreateOrderController {
  constructor(private createOrderUseCase: CreateOrderUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const order = await this.createOrderUseCase.execute(request.body);
      return response.status(201).json(order);
    } catch (error: any) {
      return response.status(400).json({ message: error.message });
    }
  }
}
