export interface WebhookPaymentDTO {
  order_id: string;
  status: "approved" | "rejected";
}
