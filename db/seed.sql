DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS users_login;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(20),
    password VARCHAR(20),
    profile_pic text
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(45),
    img text,
    content text,
    author_id int REFERENCES users (id)
);

CREATE TABLE users_login (
    user_login_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users (id),
    hash TEXT
);

