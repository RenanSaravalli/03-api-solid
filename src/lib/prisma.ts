import { env } from '@/env/index.js'
import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient({
  log: env.NODE_ENV === 'dev' ? ['query'] : [],
})
// Mostra na minha aplicação os logs feitos
