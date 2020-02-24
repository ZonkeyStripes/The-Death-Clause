-- DROP DATABASE pointNclick if EXISTS;

-- CREATE DATABASE pointNclick;


-- use pointNclick;

-- CREATE TABLE test(
--     ID int not null auto_increment,
--     email varchar (100),
--     USER_NAME varchar (30),
--     password varchar (30),
--     currentroom varchar (30),
--     PRIMARY KEY (id)
-- );

-- CREATE TABLE items(
--     id int not null auto_increment,
--     NAMES VARCHAR (30),
--     IMAGE varchar (100),
-- );

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


DROP DATABASE if EXISTS deathClause;
CREATE DATABASE deathClause;
use deathClause;

CREATE TABLE users(
    UserID int not null auto_increment PRIMARY KEY,
    User varchar (30),
    password varchar (30)
);

CREATE TABLE gameObjects (
    GobID int not null auto_increment PRIMARY KEY,
    name varchar(100),
    description varchar (100)
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
    MainID int not null auto_increment PRIMARY KEY,
    FOREIGN KEY (DialogID) REFERENCES dialog(DialogID),
    FOREIGN KEY (GobID) REFERENCES gameObjects(GobID)
);