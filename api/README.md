# Sistema de Matrícula

## 1. Setup com Docker

Este projeto contém a configuração necessária para rodar uma aplicação Node.js com NestJS e um banco de dados PostgreSQL utilizando Docker e Docker Compose. O objetivo desse setup é facilitar o desenvolvimento e garantir que o ambiente de execução seja o mais próximo possível do ambiente de produção.

### Estrutura de Arquivos

O projeto está estruturado da seguinte maneira:

```lua
/<root>
|-- Dockerfile
|-- docker-compose.yml
|-- .dockerignore
|-- .env
|-- /node_modules
|-- /src
|-- package.json
|-- package-lock.json
```

### Dockerfile

O Dockerfile é utilizado para criar a imagem Docker da aplicação. Ele define como o ambiente da aplicação será configurado, como as dependências serão instaladas e como o aplicativo será executado dentro do container.

Conteúdo do Dockerfile:

```Dockerfile
# Usa uma imagem menor baseada no Alpine para reduzir o tamanho

FROM node:18-alpine

# Define o diretório de trabalho no container

WORKDIR /app

# Copia apenas arquivos necessários para instalar dependências (otimiza cache)

COPY package.json package-lock.json ./

# Instala dependências

RUN npm ci

# Copia o restante dos arquivos (evita sobrescrever node_modules)

COPY . .

# Expõe a porta usada pela aplicação

EXPOSE 3000

Usa volumes para evitar precisar reinstalar dependências a cada mudança

CMD ["npm", "run", "start:dev"]
```

**Explicações:**
Imagem Base (FROM node:18-alpine): Utiliza uma imagem baseada no Alpine, que é uma versão minimalista do Linux. Isso reduz o tamanho da imagem Docker.

Diretório de Trabalho (WORKDIR /app): Define o diretório dentro do container onde o código será copiado e executado.

Copiar arquivos de dependência (COPY package.json package-lock.json ./): Copia apenas os arquivos essenciais para a instalação das dependências antes de copiar o restante dos arquivos.

Instalação de Dependências (RUN npm ci): Utiliza o comando npm ci para instalar as dependências de forma mais rápida e com maior consistência.

Copiar o código restante (COPY . .): Copia todos os outros arquivos da aplicação para o container.

Expor a Porta (EXPOSE 3000): Informa ao Docker que a aplicação irá rodar na porta 3000.

Comando para Iniciar a Aplicação (CMD ["npm", "run", "start:dev"]): O comando que será executado para rodar a aplicação. Normalmente, isso irá rodar o servidor em modo de desenvolvimento.

### Docker Compose

O docker-compose.yml define os serviços necessários para rodar sua aplicação, como o banco de dados e o backend (app). Ele também configura como os containers interagem entre si.

Conteúdo do docker-compose.yml:

```YAML
version: '3.8'

services:
db:
image: postgres:15
restart: always
environment:
POSTGRES_USER: postgres
POSTGRES_PASSWORD: postgres
POSTGRES_DB: postgres
container_name: postgres-sistema-de-matricula
ports: - '${DB_PORT:-5432}:${DB_PORT:-5432}' # Usando variável de ambiente para configurar a porta
volumes: - postgres_data:/var/lib/postgresql/data
healthcheck:
test: ['CMD-SHELL', 'pg_isready -U postgres']
interval: 10s
retries: 5
timeout: 5s

app:
build:
context: .
dockerfile: Dockerfile
container_name: sistema-de-matricula
depends_on:
db:
condition: service_healthy
ports: - '${APP_PORT:-3000}:${APP_PORT:-3000}' # Usando variável de ambiente para configurar a porta
volumes: - .:/app - /app/node_modules
environment: - PORT=${APP_PORT:-3000}

volumes:
postgres_data:
```

**Explicações:**

**Serviço db (PostgreSQL):**

A imagem usada é a oficial postgres:15, que fornece uma instalação do PostgreSQL.

A variável de ambiente POSTGRES_USER, POSTGRES_PASSWORD, e POSTGRES_DB são configuradas para inicializar o banco de dados.

A configuração de ports usa a variável de ambiente \${DB_PORT:-5432}, o que significa que se a variável DB_PORT não for configurada, o valor padrão será 5432.

O healthcheck garante que o container do banco de dados esteja pronto para receber conexões antes de tentar iniciar o serviço da aplicação.

**Serviço app (Aplicação):**

A aplicação é construída a partir do Dockerfile usando o comando build.

O depends_on garante que o serviço db seja iniciado antes da aplicação, embora o healthcheck do db seja o que garante que o banco de dados esteja pronto para aceitar conexões.

A configuração de ports usa a variável ${APP_PORT:-3000}, o que permite que a porta da aplicação seja configurada via .env.

O volume . :/app mapeia o código da aplicação para dentro do container, enquanto o volume /app/node_modules garante que os módulos Node.js não sejam sobrescritos pelo volume da aplicação.

### Arquivo .env

O arquivo .env é onde você define as variáveis de ambiente que serão usadas no seu docker-compose.yml. Ele permite personalizar as portas e outras configurações sem precisar alterar o arquivo docker-compose.yml diretamente.

`Exemplo de .env:`

DB_PORT=5433
APP_PORT=3001

Com esse arquivo .env, o Docker Compose usará essas variáveis para definir as portas dos serviços.
O valor de DB_PORT será 5433, e o valor de APP_PORT será 3001.
Se você não definir um valor no .env, o Docker Compose usará os valores padrão (5432 para o banco de dados e 3000 para a aplicação).

**Como funciona:**

Quando o Docker Compose encontra variáveis como \${DB_PORT} ou \${APP_PORT} no docker-compose.yml, ele irá procurar por essas variáveis no arquivo .env.

Se as variáveis forem encontradas no .env, ele as usará para configurar os serviços.

Caso contrário, ele utilizará os valores padrão definidos no próprio arquivo docker-compose.yml.

### Arquivo .dockerignore

O arquivo .dockerignore serve para evitar que arquivos desnecessários sejam copiados para a imagem Docker, o que ajuda a reduzir o tamanho da imagem e a garantir que apenas os arquivos necessários sejam incluídos.

Conteúdo do .dockerignore:

```.dockerignore
node_modules
npm-debug.log
dist
.git
.env
\*.log
```

**Explicações:**

node_modules: Não deve ser copiado para o container, pois as dependências serão instaladas dentro do próprio container.

npm-debug.log e\*.log: Arquivos de log gerados durante o desenvolvimento. Não há necessidade de incluí-los na imagem Docker.

dist: Caso você esteja usando o TypeScript, o diretório dist contém os arquivos compilados. Eles não precisam ser copiados para o container, pois o código será compilado durante a execução.

.git: O diretório .git contém informações do repositório Git, mas não é necessário dentro da imagem.

.env: O arquivo .env contém variáveis sensíveis, então ele não deve ser copiado para dentro do container.
Como Rodar o Projeto

### Crie o arquivo .env com as variáveis de ambiente desejadas

`arquivo .env:`

```env
DB_PORT=5433
APP_PORT=3001
```

### Construa e inicie os containers usando o Docker Compose

`docker-compose up --build`

- O Docker Compose irá construir as imagens necessárias e iniciar os containers para o banco de dados e a aplicação.

### Conclusão

Agora você tem uma aplicação configurada para rodar com Docker e Docker Compose, utilizando PostgreSQL como banco de dados e Node.js com NestJS para a aplicação. O uso do arquivo .env permite que você altere facilmente as configurações de ambiente sem precisar modificar os arquivos de configuração do Docker diretamente.
