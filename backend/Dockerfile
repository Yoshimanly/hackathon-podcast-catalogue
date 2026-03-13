# backend/Dockerfile
FROM node:20

WORKDIR /app

# Copia apenas package.json para aproveitar cache
COPY package*.json ./

# Instala dependências + sharp corretamente
RUN npm install --include=optional sharp

# Copia resto do projeto
COPY . .

EXPOSE 1337

CMD ["npm", "run", "develop"]