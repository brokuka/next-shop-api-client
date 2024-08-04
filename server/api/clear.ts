import { sessionTable } from '../schema/session'
import { userTable } from '~/server/schema/user'
import db from '~/server/utils/db'

export default defineEventHandler(async () => {
  await db.delete(sessionTable)
  await db.delete(userTable)

  return {
    message: 'Success',
  }
})
