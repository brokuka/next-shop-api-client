import process from 'node:process'
import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  dialect: 'postgresql',
  schema: './server/schema',
  out: './drizzle',
  dbCredentials: {
    url: process.env.DB_URL as string,
  },
})
