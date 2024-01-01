CREATE DATABASE test;

\c test;

CREATE TABLE IF NOT EXISTS "users" (
    id VARCHAR PRIMARY KEY,
    name VARCHAR,
    email VARCHAR
);

INSERT INTO "users" (id, name, email)
    VALUES (gen_random_uuid(), 'dave', 'daveTheDiver@example.com');