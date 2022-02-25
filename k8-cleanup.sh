#!/bin/bash

kubectl delete -f k8-templates/k8-microservices.yaml
kubectl delete -f k8-templates/k8-api.yaml
kubectl delete -f k8-templates/k8-kafka.yaml
kubectl delete -f k8-templates/k8-secret.yaml
kubectl delete -f k8-templates/k8-config.yaml
