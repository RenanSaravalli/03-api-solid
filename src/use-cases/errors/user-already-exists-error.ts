// Classe para trabalhar com o usuário que já possui o email,
export class UserAlreadyExistsError extends Error {
  constructor() {
    super('E-mail already exists.')
  }
}
