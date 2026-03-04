# Docker

- Ainda mais utilizado em ambiente de produção, pq esse cara facilita muito o deploy
- Subir um banco de dados Postgre, para essa aplicação, ele vai estar rodando em minha máquina, só que na hora que quiser matar isso, basta excluir e já era.

Inicialmente baixamos o docker em nossa máquina (Pesquisei no GEMINI)
Agora estamos instalando a imagem do POSTGRESQL para nosso projeto, estamos baixando a da bitnami, professor falou que eles tem mais segurança.
Rodei o seguinte comando:
`docker run --name api-solid-pg -e POSTGRESQL_USERNAME=name -e POSTGRESQL_PASSWORD=name POSTGRESQL_DATABASE=apisolid -p 5432:5432  bitnami/postgresql:latest`

Apos criada a imagem, em nossas variáveis de ambiente modificamos a url, ela vai ficar assim:
`DATABASE_URL="postgres://docker:docker@localhost:5432/apisolid?schema=public"`
e rodamos o seguinte comando:
`npx prisma migrate dev`
Esse comando vai olhar para o schema.prisma analisar as mudanças que não ocorreram no banco de dados
