
docker-compose run django django-admin startproject *Folder-name-core* .
docker exec -it django bash

-----

pgdb => the name of the services

docker exec -it pgdb psql -U postgres

docker-compose up/down


Postgres
==========
docker exec -it postgres psql -U postgres
\c *database_name*
\d 
\d+ *table_name*
\q 