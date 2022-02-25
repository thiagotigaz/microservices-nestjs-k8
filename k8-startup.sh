#!/bin/bash

# Build Docker image used by api and microservices. Name of image has to match image declared on templates.
docker build -t limascloud/node .

kubectl apply -f k8-templates/k8-config.yaml
kubectl apply -f k8-templates/k8-secret.yaml
kubectl apply -f k8-templates/k8-kafka.yaml
kubectl apply -f k8-templates/k8-api.yaml
kubectl apply -f k8-templates/k8-microservices.yaml