// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import { index, int, sqliteTableCreator, text } from "drizzle-orm/sqlite-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = sqliteTableCreator(
  (name) => `real-monsters_${name}`,
);

export const monsters = createTable("monsters", {
  id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  name: text("name", { length: 256 }).notNull().default(""),
  shortName: text("short_name", { length: 256 }).notNull().default(""),
  image: text("image", { length: 256 }).notNull().default(""),
  fullName: text("full_name", { length: 256 }),
  paragraphOne: text("paragraph_one", { length: 1024 }).notNull().default(""),
  paragraphTwo: text("paragraph_two", { length: 1024 }).notNull().default(""),
});

export type selectMonster = typeof monsters.$inferSelect;
