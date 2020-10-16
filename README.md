# Happy - Bring happiness to the world.

## About

Visit orphanages and change many children's day.

## Preview Desktop

<div align="center">
  <img src="https://ik.imagekit.io/rlpwchithd/Screen_Shot_2020-10-12_at_16.21.23_UMylHBNQi.png">
</div>

## Prerequisites

- [Node LTS](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/pt-BR/)
- [Docker](https://docs.docker.com/get-docker/)
- [Expo](https://expo.io/learn)

## Cloning project

```bash

  # Clone repository
  $ git clone https://github.com/pereiradilson/rocketseat-nlw-3.git

  # Enter folder
  $ cd rocketseat-nlw-3

```

## Install and configure docker to PostgreSQL

```bash

  # Create database postgre
  $ docker run --name database -e POSTGRES_USER=user -e POSTGRES_PASSWORD=password -p 5432:5432 bitnami/postgresql:latest

```

## Install backend

```bash

  # Enter folder
  $ cd backend

  # Install dependences
  $ yarn

  # Configure database
  $ mv ormconfig.example.json ormconfig.json

  # Open the ormconfig.json file and change the connection data
  $ code ormconfig.json

  # Execute
  $ yarn dev

```

## Install frontend

```bash

  # Enter folder
  $ cd web

  # Install dependences
  $ yarn

  # Execute
  $ yarn start

```

## Install mobile

```bash

  # Enter folder
  $ cd mobile

  # Install dependences
  $ yarn

  # Execute
  $ yarn start

```

## Authors

- **Adilson Pereira** - [LinkedIn](https://www.linkedin.com/in/pereiradilson/)

## License

This project is licensed under the MIT License.
