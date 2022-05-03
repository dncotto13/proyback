CREATE DATABASE city;

USE city;

-- Tabla de roles
CREATE TABLE roles(
    id INT PRIMARY KEY AUTO_INCREMENT,
    rol_name VARCHAR(30) NOT NULL UNIQUE,
    rol_status TINYINT(1) NOT NULL
)ENGINE=INNODB;

-- Tabla de usuarios
CREATE TABLE users(
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(20) NOT NULL UNIQUE,
    password VARCHAR(60) NOT NULL,
    statususer TINYINT(1) NOT NULL,
    rolid INT NOT NULL,
    CONSTRAINT fk_users_roles FOREIGN KEY(rolid) REFERENCES roles(id)
);


-- Tabla de incidencias
CREATE TABLE incidents(
    id INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(150) NOT NULL,
    description TEXT NOT NULL,
    uploadfile blob,
    city VARCHAR(50) NOT NULL,
    barrio VARCHAR(50) NOT NULL,
    state VARCHAR(10),
    created_at timestamp NOT NULL DEFAULT current_timestamp
);

