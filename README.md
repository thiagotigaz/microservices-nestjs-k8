# microservices-nestjs-k8
Microservices Tutorial Using NestJS and Kubernetes

This project is a part of tutorial series about Microservices, NodeJS, NestJS, Kafka and Kubernetes.
To learn more about it, please visit https://limascloud.com/2022/01/02/nodejs-microservices-with-nestjs-and-kubernetes

![Microservices Tutorial Using NestJS and Kubernetes](./docs/nestjs%20k8%20microservices.png)

## How to run
To run the project we need a Kafka server running on the host machine and we also need to start the `api` and `microservices` projects. Please follow the below instructions in order.

### Kafka Setup
Please follow 
https://limascloud.com/2022/01/02/docker-compose-kafka-setup-confluent-cloud/
tutorial to setup your local Kafka cluster.
### Api
```
cd api
npm run start
```
### Microservices
```
cd microservices
npm run start
```