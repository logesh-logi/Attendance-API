# Attendance Management API

(https://hub.docker.com/repository/docker/logeshlogi/attendance-backend/general)

## Description

This API manages attendance records for users. It is built with Node.js and Express backend framework, and PostgreSQL with Sequelize ORM for the database.

## Installation

To run the API, follow these steps:

1. Pull the Docker image:
   command: docker pull logeshlogi/attendance-backend

2. Set up the required environment variables:

- `DB_NAME`: Database name
- `DOCKER_DB_HOST`: Database host (`localhost` if using a local database, `<database_container_name>` if using a container)
- `DB_USER`: Database user
- `DB_PASSWORD`: Database password
- `PORT`: Port the backend runs on in the Docker container
- `SECRET_KEY`: JWT secret key
- `JWT_EXPIRATION`: JWT expiration time
- `DIALECT`: Dialect used for Sequelize configuration

3. Run the Docker container with the appropriate environment variables configured.
