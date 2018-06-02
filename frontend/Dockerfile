FROM node:9

WORKDIR /app
COPY . /app

RUN yarn

EXPOSE 8080

RUN yarn run lint
CMD ["yarn", "run", "dev"]
