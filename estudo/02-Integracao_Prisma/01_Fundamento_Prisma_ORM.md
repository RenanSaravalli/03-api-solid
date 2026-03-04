# Vamos começar a trabalhar com BD em nossa aplicação

## ORM

- Object Relational Mapper: Basicamente esse cara vai mapear Tabelas do nosso banco de dados em Objetos, um ORM é serve para abstrair o banco de dados em nosso código

## Iniciando:

- Vamos começar instalando a dependencia do prisma em nosso projeto:
  `npm i prisma -D`

- Vamos inicializar a parte de banco de dados
  `npx prisma init`
- Esse comando vai criar o arquivo schema.prisma em nosso projeto, vai ser nele que vamos estruturar nosso banco de dados

model User {
// Com uuid trazemos mais segurança para o id
id String @id @default(uuid())
name String
email String @unique

@@map("users")
}
Criamos nossa tabela User e agora vamos executar o seguinte comando:
`npx prisma generate`
Esse comando vai criar de forma automatizada a tipagem do nosso schema
tipagem: Fazer com que o typescript entenda a tabela User e seus devidos campos

E para começar a trabalhar com isso precisamos baixar
`npm i @prisma/client`
Ela vamos utilizar para acessar o banco de dados
