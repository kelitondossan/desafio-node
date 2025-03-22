export interface Item {
  product: string;
  quantity: number;
  price: number;
}

export interface CreateOrderDTO {
  customer: string;
  items: Item[];
  payment_method: "cartao" | "boleto" | "pix";
}
