# Projet Micro-services

### Nos deux api "domain"

On a crée deux api, une de recette et une de nutrition avec leur crud.

### Notre workflow nécessitant un appel inter-api

Quand vous voudrez créer une recette avec Postman ou autre, il faudra d'abord créer une nutrition car dans la méthode "add" du controller "recette", il y a une condition qui check si l'id de nutrition que vous avez mis existe ou pas. Et si elle n'existe pas, ça ne créera pas la recette. 

#### Install depedencies

A la racine du projet :
```bash
npm i
```

#### Run docker

A la racine du projet :
```bash
docker compose up -d
```

### Run the prisma migration
#### User-api

Set the .env :
```bash
MYSQL_URL="mysql://root:passwd@localhost:3306/user"
insecure=true
NODE_ENV=development
JAEGER_URL="http://localhost:4318/v1/traces"
HEALTH_PORT=3001
AUTH_API_URL="localhost:4003"
```

```bash
npx prisma migrate dev
```
#### Auth-api

Set the .env :
```bash
MYSQL_URL="mysql://root:passwd@localhost:3306/auth"
PORT=4003
USER_API_URL="localhost:4002"
JWT_SECRET="super-secret"
insecure=true
JAEGER_URL="http://localhost:4318/v1/traces"
HEALTH_PORT=3002
```

```bash
npx prisma migrate dev
```

#### Nutrition-api

Set the .env :
```bash
MYSQL_URL="mysql://root:passwd@localhost:3306/nutrition"
```

```bash
npx prisma migrate dev
```

#### Recette-api

Set the .env :
```bash
MYSQL_URL="mysql://root:passwd@localhost:3306/recette"
```

```bash
npx prisma migrate dev
```
