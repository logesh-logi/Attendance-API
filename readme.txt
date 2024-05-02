This is Attendance Management API Image.This image also requires database to store the data you can either use local database or can use postgres image.In this backend Api i have used node and express backend framework and postgres with sequelize ORM for database.

Docker Image: docker pull logeshlogi/attendance-backend
Docker hub Image URL: https://hub.docker.com/r/logeshlogi/attendance-backend

Below are Mandatory Env variables that are need to configured while running the container.

1.  DB_NAME - This refer to Database name
2.  DOCKER_DB_HOST - This refers to Database host. 'localhost' if you are using local database and '<database_container_name>' if
    you are running database as container.
3.  DB_USER - This refers to database user.
4.  DB_PASSWORD - This refers to database password.
5.  PORT - This refers to port the backend runs on docker container.
6.  SECRET_KEY - This refers to JWT secret key.
7.  JWT_EXPIRATION - This refers to JWT Expiration time.
