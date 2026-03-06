import fastify from 'fastify'
import { appRoutes } from './http/routes.js'

export const app = fastify()

// Chama as nossas rotas
app.register(appRoutes)
