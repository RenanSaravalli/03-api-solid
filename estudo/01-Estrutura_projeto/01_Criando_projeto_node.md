# Criando Projeto Node JS

- Criar o package.json:
  `npm init -y`

- Instalando dependencias de desenvolvimento (TS):
  `npm i typescript @types/node tsx tsup -D`

- Criar o arquivo de configuração do Typescript
  `npx tsc --init`

- Instalando o fastify
  `npm i fastify`

Vamos divir a nossa aplicação fastify em dois arquivos:
`server.ts` -> Aqui vai iniciar o servidor
`app.ts` -> Aqui cria a aplicação app fastify

- Dentro do package.json criamos alguns scripts para nos ajudarmos
  `"dev": "tsx watch src/server.ts"`
  `tsx -> Biblioteca que baixamos para executar nossa aplicação`
  `watch -> Para ficar observando mudanças e quando ocorrer startar novamente`
  Script de build:
  `"build": "tsup src --out-dir build"` -> Pegar todo o código ts dentro de src e converter em Js dentro da pasta build
  Script de start em produção
  `"start": "node build/server.js" -> Para ficar observando mudanças e quando ocorrer startar novamente`
