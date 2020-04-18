# Bloggrs API

Repository for practice about RESTful API design.

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
