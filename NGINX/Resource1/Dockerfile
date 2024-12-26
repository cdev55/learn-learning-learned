FROM node

WORKDIR /app

COPY server.js .
COPY images ./images
COPY package.json .
COPY index.html .

RUN npm install

EXPOSE 3000

CMD ["node", "server.js"]
