# Vamos ver como relacionar nossas tabelas dentro do prisma

Primeiro relacionamento que vamos fazer vai ser o usuario e checkin
um usuário pode fazer vários checkins

E para fazer isso no prisma no exemplo com o model de user vamos adicionar um campo no modulo de checkin:
`user User` e salvar

ao salvar foram feitas essas alterações (automáticas)

```
model User {
  // Com uuid trazemos mais segurança para o id
  id            String    @id @default(uuid())
  name          String
  email         String    @unique
  password_hash String
  // Hashing -> Ir
  created_at    DateTime  @default(now())
  checkIns      CheckIn[] // camelCase -> Esse é um campo que não vai ser criado no banco de dados, ele vai servir para utilizarmos no código

  @@map("users")
}

model CheckIn {
  id           String    @id @default(uuid())
  created_at   DateTime  @default(now())
  validated_at DateTime?

  user    User   @relation(fields: [user_Id], references: [id]) // Basicamente falando o campo de chave_estrangeira e sua referencia
  user_Id String (Chave estrangeira)

  @@map("check_ins")
}
```

Da mesma forma para o model de Gym:

```
odel CheckIn {
  id           String    @id @default(uuid())
  created_at   DateTime  @default(now())
  validated_at DateTime?

  user    User   @relation(fields: [user_Id], references: [id])
  user_Id String

  gym   Gym    @relation(fields: [gymId], references: [id])
  gymId String

  @@map("check_ins")
}

model Gym {
  id          String    @id @default(uuid())
  title       String
  description String?
  phone       String?
  latitude    Decimal
  longitude   Decimal
  checkIns    CheckIn[]

  @@map("gyms")
}
```
