
FROM node:14-alpine


WORKDIR /src

COPY package*.json ./

RUN npm install


COPY . .


EXPOSE 5001

CMD [ "npm", "run", "start" ]
