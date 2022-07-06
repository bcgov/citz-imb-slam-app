###############################################################################
###                          Install Dependencies                           ###
###############################################################################
FROM node:17.5.0-alpine3.14 as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package*.json ./
RUN npm ci --silent
RUN npm install react-scripts -g --silent
COPY . ./
RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache
RUN npm run build

FROM nginx:stable-alpine
COPY --from=build /app/build usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
