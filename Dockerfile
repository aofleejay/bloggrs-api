FROM node:12-alpine

WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .
RUN yarn

COPY src ./src
COPY .babelrc ./.babelrc
RUN yarn build

RUN yarn install --production

EXPOSE 4000
CMD node dist/server.js
