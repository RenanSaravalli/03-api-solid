import type { UsersRepository } from '@/repositories/users-repository.js'
import { hash } from 'bcryptjs'
import { UserAlreadyExistsError } from './errors/user-already-exists-error.js'

// Esse será o arquivo que vamos utilizar para criar o usuário na base

// Precisamos receber os dados do usuário criamos uma interface dos dados que esperamos receber para criar o usuário
interface RegisterUserCaseRequest {
  name: string
  email: string
  password: string
}

// Classe para trabalhar com INVERSÃO de DEPENDENCIA (SOLID)
// A qual vamos passar o repository no construtor da classe
export class RegisterUserCase {
  constructor(private usersRepository: UsersRepository) {}

  // Função Base que vai criar o usuário
  async execute({ name, email, password }: RegisterUserCaseRequest) {
    // Agora vamos utilizar o método que importamos de bycryptjs, para realizar o hash da senha do usuário.
    // Vi que o hash retorna uma Promise (temos de usar o await)
    const password_hash = await hash(password, 6)

    // é legal também antes de cadastrar o usuário, verificar se aquele email já existe vamos retornar um erro mais amigável
    // Busando usuário pelo método do prisma findUnique (o campo que passarmos deve ser unique ou chave primária)

    const userWithSameEmail = await this.usersRepository.findByEmail(email)

    // caso exista
    if (userWithSameEmail) {
      // Agora passamos a classe de erro que criamos
      throw new UserAlreadyExistsError()
      // mensagem 409 é de conflito
    }

    await this.usersRepository.create({ name, email, password_hash })
  }
}
