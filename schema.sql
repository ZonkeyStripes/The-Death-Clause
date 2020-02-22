DROP DATABASE pointNclick if EXISTS;

CREATE DATABASE pointNclick;


use pointNclick;

CREATE TABLE test(
    ID int not null auto_increment,
    email varchar (100),
    USER_NAME varchar (30),
    password varchar (30),
    currentroom varchar (30),
    PRIMARY KEY (id)
);

CREATE TABLE items(
    id int not null auto_increment,
    NAMES VARCHAR (30),
    IMAGE varchar (100),
);

-- CREATE TABLE inventory(
--     id
--     user FK
--     item FK
-- )

-- CREATE TABLE rooms(
--     IDENTITY
--     NAME
-- )

-- CREATE TABLE rooms(
--     IDENTITY
--     NAME
-- )