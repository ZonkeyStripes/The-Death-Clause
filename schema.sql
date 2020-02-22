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