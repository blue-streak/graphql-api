FROM node:carbon
ENV API_PORT=8080
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --only=production
COPY . .
EXPOSE $API_PORT
CMD [ "node", "index.js" ]
