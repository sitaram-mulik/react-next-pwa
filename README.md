#Run following command -
docker-compose up --build --force-recreate --renew-anon-volumes -d
docker exec -it react-next-pwa-db-1 bash
mongosh