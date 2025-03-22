import { Request, Response } from "express";

export class WebhookController {
  async receivePaymentWebhook(request: Request, response: Response) {
    return response.json({ message: "Exemplo Webhook Controller" });
  }
}
