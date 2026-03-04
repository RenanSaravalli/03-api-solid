# Agora vamos configurar nossas variáveis de ambiente

- Então criamos na raiz de nosso projeto o arquivo .env
  e o arquivo .env.example

LEMBRE-SE:

- Não é apenas criar o arquivo .env, temos que carregar essa variáveis dentro de nosso projeto, para isso vamos baixar algumas dependencias:
  `npm i dotenv` -> Biblioteca responsável por fazer o parse, pegar as variáveis e passar isso para dentro de nosso projeto
  exemplo process.env.NODE_ENV

## Melhorando o carregamento das variáveis de ambiente:

vamos criar uma pasta dentro de src chamada env e criamos o arquivo chamado index.ts
vamos carregar as varíaveis dentro dele
E vamos validar nossas variáveis de ambiente
PEnse que existe variáveis de ambiente que são obrigatórias elas existirem para que minha aplicação funcione
Exemplo: URL DE BANCO DE DADOS

Para isso vamos baixar a biblioteca `zod`
`npm i zod`
