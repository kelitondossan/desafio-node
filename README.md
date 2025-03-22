# Desafio Técnico - Desenvolvedor Node.js Pleno

Esta é uma estrutura básica de exemplo para o desafio, contendo:
- Node.js + TypeScript
- Express
- PostgreSQL + Drizzle ORM
- Docker (para PostgreSQL)
- JWT (token fixo, para fins de simplificação)
- Arquitetura baseada em Use Cases
- **Swagger** (documentação disponível em \`/api-docs\`)

## Como rodar localmente

1. Instale as dependências:
\`\`\`bash
npm install
\`\`\`

2. Copie o arquivo \`.env.example\` para \`.env\` e ajuste as variáveis de ambiente, se necessário.

3. Suba o banco de dados via Docker:
\`\`\`bash
cd docker
docker-compose up -d
\`\`\`

4. Gere e aplique as migrações (na raiz do projeto):
\`\`\`bash
npm run migrate
\`\`\`
 caso a migrate falhe com dize no banco do docker façça isso:
cat drizzle/migrations/*.sql->("aqui voce coloca o nome do  arquivo sql com .sql que seria a extensão")
 | docker exec -i postgres-db psql -U postgres -d desafio_node
6. Execute em modo desenvolvimento:
\`\`\`bash
 npx ts-node src/server.ts
 \`\`\`

A aplicação estará disponível em \`http://localhost:3000\`.

- **Swagger**: Acesse \`http://localhost:3000/api-docs\` para ver a documentação interativa.
- **Token Fixo** para autenticação: Use o cabeçalho \`Authorization: Bearer meu-token-jwt-fixo\`.

