FROM node:12.16.1-alpine As builder

WORKDIR /usr/src/app

RUN apk --no-cache add curl

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:1.15.8-alpine

RUN apk --no-cache add curl

COPY --from=builder /usr/src/app/dist/* /usr/share/nginx/html
