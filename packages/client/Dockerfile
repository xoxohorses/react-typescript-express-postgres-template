FROM node:16-alpine AS base

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
RUN mkdir client shared

# Copy only /client and /shared into /packages
COPY ./packages/client ./client
COPY ./packages/shared ./shared

# Navigate back to root directory and run npm install
FROM base AS install
RUN npm install

EXPOSE 3000
WORKDIR ./client
CMD npm run start