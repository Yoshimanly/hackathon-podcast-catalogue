FROM node:20-alpine

WORKDIR /opt/app

RUN apk add --no-cache \
  build-base \
  gcc \
  autoconf \
  automake \
  zlib-dev \
  libpng-dev \
  nasm \
  bash \
  vips-dev \
  git

COPY package*.json ./
RUN npm install

COPY . .

ENV NODE_ENV=development
ENV HOST=0.0.0.0
ENV PORT=1337

EXPOSE 1337

CMD ["npm", "run", "develop"]