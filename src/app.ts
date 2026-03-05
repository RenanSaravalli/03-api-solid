import fastify from 'fastify'
import { z } from 'zod'
import { prisma } from './lib/prisma.js'
export const app = fastify()

app.post('/users', async (request, reply) => {
  const registerBodySchema = z.object({
    name: z.string(),
    email: z.email(),
    password: z.string().min(6),
  })

  // Faz a validação com o parse, caso não de certo, o código para por aqui
  const { name, email, password } = registerBodySchema.parse(request.body)

  // Pegamos os dados, agora vamos tentar realizar a criação do usuário
  await prisma.user.create({
    data: {
      name,
      email,
      password_hash: password,
    },
  })

  // Retornamos com status 201
  return reply.status(201).send()
})
