FROM node
MAINTAINER pierre humberdroz <p.humberdroz@gmail.com>

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app
RUN npm install
COPY . /usr/src/app

ENV NODE_ENV production

EXPOSE 3000 80
CMD ["npm", "run", "start"]
