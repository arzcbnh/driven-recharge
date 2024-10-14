DROP TABLE IF EXISTS phones;
DROP TABLE IF EXISTS recharges;
DROP TABLE IF EXISTS carriers;

CREATE TABLE phones (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    carrier_id INT NOT NULL,
    number CHAR(11) NOT NULL UNIQUE,
    document CHAR(11) NOT NULL
);

CREATE TABLE recharges (
    id SERIAL PRIMARY KEY,
    phone_id INT NOT NULL,
    value FLOAT(2) NOT NULL,
    date DATE NOT NULL
);

CREATE TABLE carriers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE,
  code INT NOT NULL
);

INSERT INTO carriers (name, code) VALUES ('Vivo', 15);
INSERT INTO carriers (name, code) VALUES ('Tim', 41);
INSERT INTO carriers (name, code) VALUES ('Oi', 31);
INSERT INTO carriers (name, code) VALUES ('Claro', 21);
