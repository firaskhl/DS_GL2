FROM node:20.11.1-alpine

RUN npm install -g nodemon
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 5000
CMD ["npm", "run", "backend"]