#!/bin/bash

#test des parametres
if [ $# -eq 0 ]
  then
    echo "No arguments supplied"
    echo "Usage: $0 [version_number]"
fi

#compilation du front angular
npm run build --prod

#copie des fichiers js compile dans le backend correspondant
rm -r ../service-espace-collaborateur/src/main/resources/static/*
cp -r dist/nvne-espace-collaborateur/* ../service-espace-collaborateur/src/main/resources/static

#deplacement
cd ../service-espace-collaborateur

#compilation du backend spring grâce à un maven
mvn clean package -DskipTests

#création et upload de l'image docker
docker build -t gcr.io/single-actor-306917/service-espace-collaborateur:$1 .
docker push gcr.io/single-actor-306917/service-espace-collaborateur:$1

#mise-à-jour du déploiement kubernetes
kubectl apply -f kubernetes/front-service.yml
