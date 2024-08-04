import { pgTable, serial, text, varchar } from 'drizzle-orm/pg-core'

export const userTable = pgTable('user', {
  id: serial('id').primaryKey(),
  name: text('name'),
  email: varchar('email', { length: 128 }).unique(),
  password: text('password').notNull(),
})
