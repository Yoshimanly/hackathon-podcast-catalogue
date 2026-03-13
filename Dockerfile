# Usa Node 20 oficial
FROM node:20

# Define diretório de trabalho no container
WORKDIR /opt/

# Copia package.json e package-lock.json
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia todo o projeto
COPY . .

# Expõe a porta que o site usa
EXPOSE 4000

# Comando para arrancar o Node
CMD ["npm", "start"]
