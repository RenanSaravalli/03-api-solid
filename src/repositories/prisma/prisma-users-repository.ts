import { prisma } from '@/lib/prisma.js'
import { Prisma } from '@prisma/client'
import type { UsersRepository } from '../users-repository.js'

export class PrismaUserRepository implements UsersRepository {
  async findByEmail(email: string) {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    })
    return user
  }

  async create(data: Prisma.UserCreateInput) {
    // Pegamos os dados, agora vamos tentar realizar a criação do usuário
    const user = await prisma.user.create({
      data,
    })

    return user
  }
}
