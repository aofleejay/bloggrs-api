# try-restful-api-design

Repository for practice about RESTful API design.

## 🚀 Quick start

- **Run development web service with database locally**

  ```
  cp .env.example .env
  docker-compose up
  ```

- **Run production web service locally**
  ```
  docker build -t aofleejay/try-restful-api-design:1.0.0 .
  docker run -p 4000:4000 aofleejay/try-restful-api-design:1.0.0
  ```
