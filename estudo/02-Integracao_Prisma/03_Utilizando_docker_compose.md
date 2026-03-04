# Docker compose

- QUando colocamos aquela imagem para rodar, pense que estamos rodando em nossa máquina
- Lembra daquele comando gigantesco de run que executamos para rodar, caso tenha mais pessoas no projeto, cada uma delas vai ser que rodar o mesmo comando na máquina delas (Isso é ruim)
- É para resolver esse problema o docker compose

criamos na raiz do nosso projeto o arquivo `docker-compose.yml`

`docker run --name api-solid-pg -e POSTGRESQL_USERNAME=name -e POSTGRESQL_PASSWORD=name POSTGRESQL_DATABASE=apisolid -p 5432:5432  bitnami/postgresql:latest`

Aqui a ideia é converter o comando acima para um arquivo docker-compose

- Esse arquivo basicamente dita quais são os contêiners que a aplicação precisa criar para que ela funcione

- Agora para subir a aplicação pelo docker-compose vamos usar:
  `docker compose up -d`
  -d modo detact não vai mostrar os logs
