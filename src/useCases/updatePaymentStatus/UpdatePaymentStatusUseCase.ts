import { db } from "../../config/database";
import { orders } from "../../domain/Order";
import { eq } from "drizzle-orm";
import { WebhookPaymentDTO } from "../../dtos/WebhookPaymentDTO";
import { PaymentStatus } from "../../domain/PaymentStatus";

export class UpdatePaymentStatusUseCase {
  async execute(data: WebhookPaymentDTO) {
    const newStatus = data.status === "approved" ? PaymentStatus.PAID : PaymentStatus.REJECTED;

    const [orderUpdated] = await db
      .update(orders)
      .set({ payment_status: newStatus })
      .where(eq(orders.id, data.order_id))
      .returning();

    return orderUpdated;
  }
}
