<a name="readme-top"></a>

# React, TypeScript, Express, PostgreSQL, Docker Project Template

<div align="center">
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
    <img src="https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white"/>
    <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white"/>
    <img src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white"/>
    <br/>
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/>
    <img src="https://img.shields.io/badge/ts--node-3178C6?style=for-the-badge&logo=ts-node&logoColor=white"/>
    <img src="https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=Webpack&logoColor=white"/>
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"/>
    <img src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white"/>
    <img src="https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E"/>
    <img src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white"/>
</div>
<br/>
<ol>
<li>
  <a href="#introduction">Introduction</a>
</li>
<li>
  <a href="#get-started">Get Started</a>
  <ul>
    <li><a href="#prerequisites">Prerequisites</a></li>
    <li><a href="#installation">Installation</a></li>
  </ul>
</li>
<li>
  <a href="#notes">Notes</a>
</li>
</ol>

## Introduction

<img src="https://github.com/xoxohorses/react-typescript-express-postgres-template/assets/69382434/8a58103f-a2a9-4e07-bede-cf0e65c78d16"/>

**Code more, configure less:** This template lays the foundation for local development from containerization to test setup, so you can dive right in.

## Get started

### Prerequisites

- Node: [Download](https://nodejs.org/en/download) or
  ```
  brew install node@18
  ```
- PostgreSQL: [Download](https://www.postgresql.org/download/) or
  ```
  brew install postgresql@14
  ```
- Docker: [Download](https://docs.docker.com/engine/install/) or
  ```
  brew install --cask docker
  ```

### Installation

1. Clone this repo to your local machine

   ```
   git clone git@github.com:xoxohorses/react-typescript-node-postgres-template.git
   ```

2. Navigate to project directory, install dependencies, and start the project on http://localhost:3000

   ```
   cd react-typescript-node-postgres-template/ && npm i && npm start
   ```

3. Start coding!

## Notes

**Project structure**

```
/node_modules
/packages
|  /client
|  |  /public
|  |  |  index.html
|  |  /src
|  |  |  App.tsx
|  |  |  index.tsx
|  |  |  styles.css
|  |  Dockerfile
|  |  package.json
|  |  postcss.config.cjs
|  |  tailwind.config.cjs
|  |  webpack.config.cjs
|  /server
|  |  /db
|  |  |  index.js
|  |  |  init.sql
|  |  /routes
|  |  |  index.ts
|  |  |  user.ts
|  |  index.ts
|  |  Dockerfile
|  |  package.json
|  /shared
|  |  utils.ts
|  |  utils.test.ts
|  |  package.json
.eslintrc.js
.gitignore
.prettierrc.js
jest.config.js
docker-compose.yml
package-lock.json
package.json
tsconfig.json
```

#### package.json

There is one root `package.json` with shared dependencies and one `package.json` per service (client, server) with service specific dependencies. By specifying [`"workspaces"`](https://docs.npmjs.com/cli/v8/using-npm/workspaces) in the root `package.json`, we simplify the workflow for managing and installing dependencies in a monorepo. Just run `npm i` once!

#### docker-compose.yml

DO NOT commit real env variables in your `docker-compose.yml` to GitHub. Instead, store it in a `.env` file and manually deploy it to your server, or use the secret manager in your cloud provider. The env variables currently live in docker compose only as a starting point.

#### Dockerfile

As I am building an app using this template, I've encountered this seemingly unresolvable type error `TypeError [ERR_UNKNOWN_FILE_EXTENSION]: Unknown file extension ".ts" for /app/packages/server/index.ts`. Changing the base docker image from `node:18-alpine` -> `node:16-alpine` was the only action that resolved the type error.
