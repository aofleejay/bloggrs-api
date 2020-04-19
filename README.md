# Bloggrs API

Repository for practice about RESTful API design.

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

## 🚀 Quick start

- **Run development web service with database locally**

  ```
  cp .env.example .env
  docker-compose up
  ```

- **Run production web service locally**
  ```
  docker build -t bloggrs-api:1.0.0 .
  docker run -p 4000:4000 bloggrs-api:1.0.0
  ```
