###############################################################################
###                          Install Dependencies                           ###
###############################################################################
FROM node:17.5.0-alpine3.14

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json .

RUN npm install --silent
RUN npm install react-scripts -g --silent

COPY . .

EXPOSE 3000

ENV PORT 3000

CMD ["npm", "start"]
