import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const routinesTable = sqliteTable("routines_table", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
});
