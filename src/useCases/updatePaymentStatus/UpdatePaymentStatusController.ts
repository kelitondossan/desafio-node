import { Request, Response } from "express";
import { UpdatePaymentStatusUseCase } from "./UpdatePaymentStatusUseCase";

export class UpdatePaymentStatusController {
  constructor(private updatePaymentStatusUseCase: UpdatePaymentStatusUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const order = await this.updatePaymentStatusUseCase.execute(request.body);
      return response.status(200).json(order);
    } catch (error: any) {
      return response.status(400).json({ message: error.message });
    }
  }
}
