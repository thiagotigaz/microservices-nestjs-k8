FROM node:16

ARG KAFKA_BROKERS=kafka-service:9092
ENV KAFKA_BROKERS ${KAFKA_BROKERS}

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build
RUN npm run build-microservices

ENTRYPOINT ["node"]
CMD ["dist/apps/api/main"]