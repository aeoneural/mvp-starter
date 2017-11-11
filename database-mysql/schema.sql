CREATE TABLE addressTable(
  id INT(11) AUTO_INCREMENT, 
  name VARCHAR(100),
  url VARCHAR(100),
  address VARCHAR(100),  
  PRIMARY KEY(id)
);

insert into addressTable (name, url, address) values('hackreactor', 'http://www.hackreactor.com', 'San Francisco')


