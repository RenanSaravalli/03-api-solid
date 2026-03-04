import { app } from './app.js'
import { env } from './env/index.js'

// com o host vai fazer com que a aplicação fique acessível por front-ends. Se não passarmos o host podemo ter alguns problemas de acesso
app.listen({ host: '0.0.0.0', port: env.PORT }).then(() => {
  console.log('HTTP server running!')
})
