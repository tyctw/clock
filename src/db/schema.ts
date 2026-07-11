import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const cheers = pgTable("cheers", {
  id: serial("id").primaryKey(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
