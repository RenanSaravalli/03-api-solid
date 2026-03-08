import type { FastifyRequest, FastifyReply } from 'fastify'
import z from 'zod'
import { RegisterUserCase } from '@/use-cases/register.js'
import { PrismaUserRepository } from '@/repositories/prisma/prisma-users-repository.js'

// controller criar usuário

export async function register(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    name: z.string(),
    email: z.email(),
    password: z.string().min(6),
  })

  // Faz a validação com o parse, caso não de certo, o código para por aqui
  const { name, email, password } = registerBodySchema.parse(request.body)

  // aqui vamos chamar nosso método de criar o usuário em nossa base, passamos pelo try catch pois damos um erro caso o email do usuário já exista
  try {
    const prismaUsersRepository = new PrismaUserRepository()
    // instanciando nossa classe de service
    const registerUseCase = new RegisterUserCase(prismaUsersRepository)

    await registerUseCase.execute({
      name,
      email,
      password,
    })
  } catch (err) {
    reply.status(409).send()
  }

  // Retornamos com status 201
  return reply.status(201).send()
}
