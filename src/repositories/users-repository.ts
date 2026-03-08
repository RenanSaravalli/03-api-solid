import type { Prisma, User } from '@prisma/client'

// Interface que vai dizer quais métodos e seus parâmetros vamos ter dentro do repository
export interface UsersRepository {
  findByEmail(email: string): Promise<User | null>
  create(data: Prisma.UserCreateInput): Promise<User>
}
