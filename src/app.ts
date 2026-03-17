import fastify from 'fastify'
import { appRoutes } from './http/routes.js'
import { ZodError } from 'zod'
import { env } from './env/index.js'

export const app = fastify()

// Chama as nossas rotas
app.register(appRoutes)

// Vamos criar um função global que lida com os erros

app.setErrorHandler((error, _, reply) => {
  // Vamos tratar o erro de validação
  if (error instanceof ZodError) {
    reply
      .status(400)
      .send({ message: 'Validation Error', issues: error.format() })
  }

  if (env.NODE_ENV !== 'production') {
    console.error(error)
  } else {
    // TODO Fazer o log para uma ferramenta externa, (Ferramenta de observalidade)
  }

  // caso passe por aqui, realmente é um erro desconhecido
  return reply.status(500).send({ message: 'Internal Server Error' })
})
