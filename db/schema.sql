DROP DATABASE IF EXISTS burger_db;
CREATE DATABASE burger_db;

use burger_db;

create table burger(
    id int not null AUTO_INCREMENT,
    burger_name varchar(30),
    devoured Boolean,
    PRIMARY Key(id)
);




