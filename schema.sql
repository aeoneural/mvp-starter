
DROP DATABASE IF EXISTS mvpmap;
CREATE DATABASE mvpmap;

USE mvpmap;

CREATE TABLE address (
  id INTEGER NOT NULL AUTO_INCREMENT, 
  place_id VARCHAR(100) NOT NULL, 
  street VARCHAR(100),
  city VARCHAR(100),
  zipState VARCHAR(100),
  country VARCHAR(100),
  name VARCHAR(100), 
  lat DOUBLE, 
  lng DOUBLE,
  rating INTEGER default 0, 
  PRIMARY KEY(id)
);

-- CREATE TABLE ADDRESS_TYPE (
--   id INT NOT NULL, 
--   type VARCHAR(20), 
--   PRIMARY KEY(id),
--   FOREIGN KEY(id) REFERENCES address(id),

-- )


/*  Execute this file from the command line by typing:
 *    mysql -u student < schema.sql
 *  to create the database and the tables.*/

