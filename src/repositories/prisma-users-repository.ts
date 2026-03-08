import { prisma } from '@/lib/prisma.js'
import { Prisma } from '@prisma/client'

export class PrismaUserRepository {
  async create(data: Prisma.UserCreateInput) {
    // Pegamos os dados, agora vamos tentar realizar a criação do usuário
    const user = await prisma.user.create({
      data,
    })

    return user
  }
}
