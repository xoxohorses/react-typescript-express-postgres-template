FROM node:18-alpine AS base

WORKDIR /app

# Copy the config files over
COPY package.json .
COPY package-lock.json .
COPY tsconfig.json .
COPY .eslintrc.js .
COPY .prettierrc.js .
COPY .gitignore .

# Create the /packages directory with /client and /shared inside
WORKDIR ./packages
RUN mkdir server shared

# Copy only /server and /shared into /packages
COPY ./packages/server ./server
COPY ./packages/shared ./shared

# Navigate back to root directory and run npm install
FROM base AS install
RUN npm install

EXPOSE 3001
WORKDIR ./server
CMD npm run start