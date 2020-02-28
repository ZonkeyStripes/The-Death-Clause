DROP DATABASE pointNclick if EXISTS;
CREATE DATABASE pointNclick;
use pointNclick;
CREATE TABLE users (
    ID int not null auto_increment,
    email varchar (100),
    USER_NAME varchar (30),
    password varchar (30),
    currentroom varchar (30),
    PRIMARY KEY (id)

CREATE TABLE users(
    UserID int not null auto_increment PRIMARY KEY,
    User varchar (30),
    password varchar (30)
);

CREATE TABLE gameObjects (
    GobID int not null auto_increment PRIMARY KEY,
    name varchar(100),
    description varchar (100),
    IMAGE varchar (255)
);

CREATE TABLE dialog (
    DialogID int not null auto_increment PRIMARY KEY,
    npc varchar(100),
    part integer(20),
    dialect varchar(255)
);

CREATE TABLE inventory (
    InvID int not null auto_increment PRIMARY KEY,
    FOREIGN KEY (GobID) REFERENCES gameObjects(GobID),
    FOREIGN KEY (UserID) REFERENCES users(UserID)
);

CREATE TABLE composite (
    MainID int auto_increment PRIMARY KEY,
    FOREIGN KEY (DialogID) REFERENCES dialog(DialogID),
    FOREIGN KEY (GobID) REFERENCES gameObjects(GobID)
);