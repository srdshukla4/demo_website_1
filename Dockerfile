FROM node:16.13.0

WORKDIR /app

ENV PORT 80

COPY index_js.js .docker/

RUN  npm install

COPY . ./app

CMD [ "node" ,"src/server.js" ]


