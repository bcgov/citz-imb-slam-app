FROM node:17.5.0-alpine3.14
WORKDIR /app
COPY package*.json ./
RUN npm install --production --silent
COPY . .
RUN npm run build
EXPOSE 3000
RUN chown -R node:node /app
USER node
CMD npm run start
