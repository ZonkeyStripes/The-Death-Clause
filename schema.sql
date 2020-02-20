DROP DATABASE pointNclick if EXISTS;

CREATE DATABASE pointNclick;

CREATE TABLE users(
    ID
    USER_NAME
    password
    currentroom
)

CREATE TABLE items(
    id
    NAMES
    IMAGE
)

CREATE TABLE inventory(
    id
    user FK
    item FK
)

CREATE TABLE rooms(
    IDENTITY
    NAME
)