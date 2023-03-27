From node:latest

WORKDIR /app

COPY package*.json ./

RUN npm install

Copy . .

EXPOSE 3001

CMD ["npm","start"]