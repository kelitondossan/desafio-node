import { pgTable, text, varchar, numeric, uuid } from "drizzle-orm/pg-core";

export const orders = pgTable("orders", {
  id: uuid("id").primaryKey().notNull(),
  customer: varchar("customer", { length: 255 }).notNull(),
  total_amount: numeric("total_amount", { precision: 10, scale: 2 }).notNull(),
  payment_method: varchar("payment_method", { length: 50 }).notNull(),
  payment_status: varchar("payment_status", { length: 50 }).notNull(),
  payment_link: text("payment_link"),
  created_at: text("created_at"), //timestamp se preferir
});
