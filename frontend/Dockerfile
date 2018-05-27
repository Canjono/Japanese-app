FROM node:9

COPY package.json yarn.lock /

ENV NODE_PATH=/node_modules
ENV PATH=$PATH:/node_modules/.bin
RUN yarn

WORKDIR /app
COPY . /app

EXPOSE 8080

RUN yarn run lint
CMD ["yarn", "run", "dev"]
