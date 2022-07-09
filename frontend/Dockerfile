FROM node:18-alpine3.15

WORKDIR /frontend

ENV PATH /frontend/node_modules/.bin:$PATH
COPY ./frontend/package.json .
COPY ./frontend/package-lock.json .
RUN npm install

COPY . ./
 
EXPOSE 3000
 
CMD [ "npm", "start" ]