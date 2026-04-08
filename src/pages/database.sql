S
CREATE DATABASE IF NOT EXISTS trivia_db;
USE trivia_db;


CREATE TABLE IF NOT EXISTS salas (
    id_sala INT AUTO_INCREMENT PRIMARY KEY,
    nombre_sala VARCHAR(100) NOT NULL,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE IF NOT EXISTS jugadores (
    id_jugador INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    id_sala INT,
    puntaje INT DEFAULT 0,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_sala) REFERENCES salas(id_sala)
);


CREATE TABLE IF NOT EXISTS preguntas (
    id_pregunta INT AUTO_INCREMENT PRIMARY KEY,
    pregunta TEXT NOT NULL,
    opcion_a VARCHAR(255),
    opcion_b VARCHAR(255),
    opcion_c VARCHAR(255),
    opcion_d VARCHAR(255),
    respuesta_correcta CHAR(1)
);


CREATE TABLE IF NOT EXISTS respuestas (
    id_respuesta INT AUTO_INCREMENT PRIMARY KEY,
    id_jugador INT,
    id_pregunta INT,
    respuesta CHAR(1),
    es_correcta BOOLEAN,
    fecha_respuesta TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_jugador) REFERENCES jugadores(id_jugador),
    FOREIGN KEY (id_pregunta) REFERENCES preguntas(id_pregunta)
);


INSERT INTO preguntas (pregunta, opcion_a, opcion_b, opcion_c, opcion_d, respuesta_correcta)
VALUES
('¿Capital de Colombia?', 'Bogotá', 'Medellín', 'Cali', 'Cartagena', 'A'),
('¿Cuánto es 5 + 5?', '8', '9', '10', '11', 'C'),
('¿Lenguaje usado en React?', 'Python', 'Java', 'JavaScript', 'C++', 'C'),
('¿Color del cielo?', 'Rojo', 'Azul', 'Verde', 'Amarillo', 'B'),
('¿3 x 3 = ?', '6', '9', '12', '15', 'B'),
('¿Capital de Francia?', 'Londres', 'París', 'Roma', 'Berlín', 'B'),
('¿Cuánto es 7 - 4?', '2', '3', '4', '5', 'B'),
('¿Lenguaje principal de Android?', 'Java', 'Python', 'C#', 'Ruby', 'A'),
('¿Color de la manzana roja?', 'Rojo', 'Verde', 'Amarillo', 'Azul', 'A'),
('¿Resultado de 6 x 2?', '10', '12', '14', '16', 'B'); 'JavaScript', 'C++', 'C');