<a name="readme-top"></a>

# React, TypeScript, Node, PostgreSQL, Docker Project Template

<div align="center">
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
    <img src="https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
    <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white"/>
    <img src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white"/>
    <br/>
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/>
    <img src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white"/>
    <img src="https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E"/>
</div>
<br/>
<details>
  <summary><b>Table of Contents</b></summary>
  <ol>
    <li>
      <a href="#introduction">Introduction</a>
    </li>
    <li>
      <a href="#get-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#notes">Notes</a>
      <ul>
        <li><a href="#package.json">package.json</a></li>
      </ul>
    </li>
  </ol>
</details>

## Introduction

**Code more, configure less:** This template lays the foundation for local development, so you can focus on project implementation.

<details>
  <summary><i>Project structure</i></summary>

```
/node_modules
/packages
|  /client
|  |  /public
|  |  |  index.html
|  |  /src
|  |  |  App.tsx
|  |  index.tsx
|  |  Dockerfile
|  |  package.json
|  |  .babelrc
|  |  webpack.config.js
|  /server
|  |  /db
|  |  |  index.js
|  |  |  init.sql
|  |  /routes
|  |  |  user.ts
|  |  index.ts
|  |  Dockerfile
|  |  package.json
|  /shared
|  |  utils.ts
|  |  package.json
.eslintrc.js
.gitignore
.prettierrc.js
docker-compose.yml
package-lock.json
package.json
tsconfig.json
```

</details>

## Get started

### Prerequisites

Install the following on your machine:

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

2. Navigate to project directory and install dependencies

   ```
   cd react-typescript-node-postgres-template && npm i
   ```

3. Start the project on http://localhost:3000

   ```
   npm start
   ```

4. Code!

## Notes

### package.json

There is one root `package.json` with shared dependencies and one `package.json` per service (client, server) with service specific dependencies. By specifying [`"workspaces"`](https://docs.npmjs.com/cli/v8/using-npm/workspaces) in the root `package.json`, we simplify the workflow for managing and installing dependencies in a monorepo. Just run `npm i` once!
