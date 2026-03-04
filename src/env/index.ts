// Carrega as variáveis de ambiente
import 'dotenv/config'
import { z } from 'zod'

// Agora vamos validar nossas variáveis de ambiente
// Quando carregarmos as variáveis de dentro do process.env elas vem como obj
// process.env.NODE_ENV = { NODE_ENV: 'dev' }

// Arqui criamos o schema das variáveis de ambiente (Oq esperamos receber)
const envSchema = z.object({
  NODE_ENV: z.enum(['dev', 'test', 'production']).default('dev'),
  PORT: z.coerce.number().default(3333),
})

// Aqui vamos fazer a validação em si
// SafeParse vai ler o process.env e comparar e validar com o schema para ver se está OK
const _env = envSchema.safeParse(process.env)

// Agora vamos verificar se a validação do método safeParse deu certo ou não
if (_env.success === false) {
  // validação falhou
  console.error('Invalid environment variables', _env.error.format())
  throw new Error('Invalid environment variables')
  // Estamos disparando esse Error, pois nenhum codigo vai rodar depois desse Error
  // Então derruba a aplicação, caso as variáveis de ambiente estejam erradas
}

// Caso a validação tenha dado certo, vamos exportar em uma variável os dados das varíaveis de ambiente

export const env = _env.data
