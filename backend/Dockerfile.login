From node:latest

WORKDIR /app

COPY package*.json ./

RUN npm install -g nodemon --save-dev

Copy . .

EXPOSE 5000

CMD ["npm","start"]