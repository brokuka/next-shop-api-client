import { verify } from '@node-rs/argon2'
import { eq } from 'drizzle-orm'
import { userTable } from '~/server/schema/user'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const existingUser = (await db.select().from(userTable).where(eq(userTable.email, body.email)))[0]

  if (!existingUser) {
    throw createError({
      message: 'Incorrect username or password',
      statusCode: 400,
    })
  }

  const validPassword = await verify(existingUser.password, body.password, hashConfig)
  if (!validPassword) {
    throw createError({
      message: 'Incorrect username or password',
      statusCode: 400,
    })
  }

  const session = await lucia.createSession(existingUser.id, {})
  appendHeader(event, 'Set-Cookie', lucia.createSessionCookie(session.id).serialize())

  const { password, ...delegate } = existingUser

  return {
    data: delegate,
    message: 'Succesfully logged in',
  }
})
