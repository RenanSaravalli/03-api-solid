import type { FastifyInstance } from 'fastify'
import { register } from './controllers/register.js'

// Nesse arquivo vamos ter as nossas rotas

export async function appRoutes(app: FastifyInstance) {
  app.post('/users', register)
}
