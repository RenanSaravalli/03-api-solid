import { prisma } from '@/lib/prisma.js'
import { PrismaUserRepository } from '@/repositories/prisma-users-repository.js'
import { hash } from 'bcryptjs'

// Esse será o arquivo que vamos utilizar para criar o usuário na base

// Precisamos receber os dados do usuário criamos uma interface dos dados que esperamos receber para criar o usuário
interface RegisterUserCaseRequest {
  name: string
  email: string
  password: string
}

// Função Base que vai criar o usuário
export async function registerUseCase({
  name,
  email,
  password,
}: RegisterUserCaseRequest) {
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
    throw new Error('Email already exists.')
    // mensagem 409 é de conflito
  }

  const prismaUsersRepository = new PrismaUserRepository()

  await prismaUsersRepository.create({ name, email, password_hash })
}
