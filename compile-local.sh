#!/bin/bash

#compilation du front angular
echo "***********   COMPILATION DU FRONT   *********"
ng build --configuration=local

#copie des fichiers js compile dans le backend correspondant
echo "***********   COPIE VERS LE BACKEND   *********"
rm -r ../service-espace-collaborateur/src/main/resources/static/*
cp -r dist/nvne-espace-collaborateur/* ../service-espace-collaborateur/src/main/resources/static

#deplacement
cd ../service-espace-collaborateur

#compilation du backend spring grâce à un maven
echo "***********   MAVEN COMPILATION DU BACKEND SPRING   *********"
mvn clean install -DskipTests

echo "***********   LANCEMENT DU PROGRAMME   *********"
java -Dspring.profiles.active=dev -jar target/service*.jar

# #création et upload de l'image docker
# docker build -t gcr.io/single-actor-306917/nvne-user-admin-service:$1 .
# docker push gcr.io/single-actor-306917/nvne-user-admin-service:$1

# #mise-à-jour du déploiement kubernetes
# kubectl apply -f user-admin-service-deployement.yml