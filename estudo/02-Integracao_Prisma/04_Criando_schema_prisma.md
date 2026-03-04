# Configrando as tabelas dentro do SCHEMA.prisma

- Quando estamos estruturando a tabela de usuários em específico o campo de senha, existe um requisito que a senha deve estar criptografada. Mas na criptografia, conseguimos criptografar algo e também descriptografar.
  Por isso na senha vamos usar o conceito de Hashing, nele só conseguismo ir com a informação, não conseguimos voltar a informação para o jeito que era.

Nosso banco de dados atualizado ficou assim:

```

model User {
  // Com uuid trazemos mais segurança para o id
  id            String   @id @default(uuid())
  name          String
  email         String   @unique
  password_hash String
  // Hashing -> Ir
  created_at    DateTime @default(now())

  @@map("users")
}

model CheckIn {
  id           String    @id @default(uuid())
  created_at   DateTime  @default(now())
  validated_at DateTime?

  @@map("check_ins")
}

model Gym {
  id          String  @id @default(uuid())
  title       String
  description String?
  phone       String?
  latitude    Decimal
  longitude   Decimal

  @@map("gyms")
}
```

Na Próxima aula vamos ver como relacionar as tabelas
