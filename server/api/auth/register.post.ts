import { eq } from 'drizzle-orm'
import { hash } from '@node-rs/argon2'
import { userTable } from '~/server/schema/user'
import db from '~/server/utils/db'
import type { BasicCredentialsSchema } from '~/utils/schema'
import { hashConfig } from '~/server/utils/auth'

export default defineEventHandler(async (event) => {
  const body = await readBody(event) as BasicCredentialsSchema

  const existingUser = await db.select().from(userTable).where(eq(userTable.email, body.email))

  if (existingUser[0]) {
    event.node.res.statusCode = 400

    return {
      message: 'User with this email is existing',
    }
  }

  const password = await hash(body.password, hashConfig)

  const newBody = {
    ...body,
    password,
  }

  const createdUser = await db.insert(userTable).values(newBody).returning()

  const { password: passwordHash, ...otherProps } = createdUser[0]
  const user = { ...otherProps }

  const session = await lucia.createSession(user.id, {})
  appendHeader(event, 'Set-Cookie', lucia.createSessionCookie(session.id).serialize())

  return {
    data: user,
    message: 'Successfully registered',
  }
})
