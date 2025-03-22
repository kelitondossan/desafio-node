import { db } from "../../config/database";
import { orders } from "../../domain/Order";
import { PaymentStatus } from "../../domain/PaymentStatus";
import { CreateOrderDTO } from "../../dtos/CreateOrderDTO";
import { randomUUID } from "crypto";

export class CreateOrderUseCase {
  async execute(data: CreateOrderDTO) {
    const totalAmount = data.items.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );

    let paymentLink: string | null = null;
    let paymentStatus = PaymentStatus.PENDING;

    switch (data.payment_method) {
      case "cartao":
        paymentStatus = PaymentStatus.PAID;
        break;
      case "boleto":
        paymentStatus = PaymentStatus.AWAITING_PAYMENT;
        paymentLink = `BOLETO-FICTICIO-${Date.now()}`;
        break;
      case "pix":
        paymentStatus = PaymentStatus.AWAITING_PAYMENT;
        paymentLink = `PIX-FICTICIO-${Date.now()}`;
        break;
    }

    const [order] = await db.insert(orders).values({
      id: randomUUID(),
      customer: data.customer,
      total_amount: totalAmount.toFixed(2),
      payment_method: data.payment_method,
      payment_status: paymentStatus,
      payment_link: paymentLink ?? undefined,
      created_at: new Date().toISOString(),
    }).returning();

    return order;
  }
}
