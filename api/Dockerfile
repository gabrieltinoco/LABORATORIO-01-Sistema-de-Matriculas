# Usa uma imagem menor baseada no Alpine para reduzir o tamanho
FROM node:23-alpine

# Define o diretório de trabalho no container
WORKDIR /app

# Copia apenas arquivos necessários para instalar dependências (otimiza cache)
COPY package.json package-lock.json ./

# Instala dependências
RUN npm install


# Copia o restante dos arquivos (evita sobrescrever node_modules)
COPY . .

# Gera o Prisma Client
RUN npx prisma generate

# Expõe a porta usada pela aplicação
EXPOSE 3000

# Compila o código
RUN npm run build

# Usa volumes para evitar precisar reinstalar dependências a cada mudança
CMD ["npm", "run", "start:dev"]
