# backend_pizza

This is the backend application for the pizza_frontend. This is made with Node.js, Express, Sequelize, Docker.

## To start the application:

First install docker and run the following commands:

To create the database:
```sh
docker run --name postgresdb -p 32768:5432 -d postgres
docker container update --restart=always postgresdb
docker exec -it postgresdb psql --username postgres -c "CREATE DATABASE pizza OWNER postgres;"
docker exec -it postgresdb psql --username postgres -c "GRANT ALL PRIVILEGES ON DATABASE pizza TO postgres;"
docker exec -it postgresdb psql --username postgres -c "DROP DATABASE devdb"
```
**Run all the above comands without the last one (that will erase the database).**
Then, copy the sql file into your ide and run it, this should create all the database.
