import type { FastifyRequest, FastifyReply } from 'fastify'
import { hash } from 'bcryptjs'
import { prisma } from '@/lib/prisma.js'
import z from 'zod'

// controller criar usuário

export async function register(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    name: z.string(),
    email: z.email(),
    password: z.string().min(6),
  })

  // Faz a validação com o parse, caso não de certo, o código para por aqui
  const { name, email, password } = registerBodySchema.parse(request.body)

  // Agora vamos utilizar o método que importamos de bycryptjs, para realizar o hash da senha do usuário.
  // Vi que o hash retorna uma Promise (temos de usar o await)
  const password_hash = await hash(password, 6)

  // é legal também antes de cadastrar o usuário, verificar se aquele email já existe vamos retornar um erro mais amigável
  // Busando usuário pelo método do prisma findUnique (o campo que passarmos deve ser unique ou chave primária)

  const userWithSameEmail = await prisma.user.findUnique({
    where: {
      email,
    },
  })

  // caso exista
  if (userWithSameEmail) {
    reply.status(409).send()
    // mensagem 409 é de conflito
  }

  // Pegamos os dados, agora vamos tentar realizar a criação do usuário
  await prisma.user.create({
    data: {
      name,
      email,
      password_hash,
    },
  })

  // Retornamos com status 201
  return reply.status(201).send()
}
