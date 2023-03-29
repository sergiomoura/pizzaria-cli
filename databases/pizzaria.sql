
-- Excluir o banco de dados, caso já exista
DROP DATABASE IF EXISTS pizzaria_cli;

# Criação do Banco de Dados
CREATE DATABASE pizzaria_cli;

# Uso do Banco de Dados
USE pizzaria_cli;


-- Criar tabelas
CREATE TABLE pizzas (
id INT(11) NOT NULL AUTO_INCREMENT,
nome VARCHAR(255) NOT NULL,
preco DECIMAL(10, 2) NOT NULL,
img VARCHAR(255) NOT NULL,
destaque TINYINT(1) NOT NULL DEFAULT 0,
score INT(11)  DEFAULT 0,
PRIMARY KEY (id)
);

CREATE TABLE ingredientes (
id INT(11) NOT NULL AUTO_INCREMENT,
nome VARCHAR(255) NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE pizza_ingredientes (
pizza_id INT(11) NOT NULL,
ingrediente_id INT(11) NOT NULL,
PRIMARY KEY (pizza_id, ingrediente_id),
FOREIGN KEY (pizza_id) REFERENCES pizzas(id),
FOREIGN KEY (ingrediente_id) REFERENCES ingredientes(id)
);

-- Criar tabela
CREATE TABLE usuarios (
id INT(11) NOT NULL AUTO_INCREMENT,
nome VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL,
senha VARCHAR(255) NOT NULL,
PRIMARY KEY (id)
);

-- Criar tabela enderecos
CREATE TABLE enderecos (
id INT(11) NOT NULL AUTO_INCREMENT,
usuario_id INT(11) NOT NULL,
endereco VARCHAR(255) NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
);

-- Criar tabela formas_de_pagamento
CREATE TABLE formas_de_pagamento (
id INT NOT NULL AUTO_INCREMENT,
nome VARCHAR(255) NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE pedidos (
  id INT PRIMARY KEY AUTO_INCREMENT,
  usuario_id INT NOT NULL,
  obs TEXT,
  total DECIMAL(10, 2) NOT NULL,
  data DATETIME NOT NULL,
  forma_pagamento_id INT NOT NULL,
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
  FOREIGN KEY (forma_pagamento_id) REFERENCES formas_de_pagamento(id)
);


CREATE TABLE pedido_pizza (
  pedido_id INT NOT NULL,
  pizza_id INT NOT NULL,
  quantidade INT NOT NULL  DEFAULT 1,
  preco_unitario DECIMAL(10, 2) ,
   obs TEXT,
  PRIMARY KEY (pedido_id, pizza_id),
  FOREIGN KEY (pedido_id) REFERENCES pedidos(id),
  FOREIGN KEY (pizza_id) REFERENCES pizzas(id)
);

CREATE TABLE cashbacks (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  pedido_id INT NOT NULL UNIQUE,
  valor DECIMAL(10,2) NOT NULL,
  FOREIGN KEY (pedido_id) REFERENCES pedidos(id)
);




-- Inserir dados
INSERT INTO ingredientes (nome)
VALUES ('mussarela'), ('calabresa'), ('cebola'), ('pepperoni'), ('tomate'), ('manjericão'), ('gorgonzola'), ('provolone'), ('parmesão'), ('pimentão'), ('ovo'), ('presunto'), ('rúcula'), ('tomate seco'), ('bacon');

INSERT INTO pizzas (nome, preco, img, destaque, score)
VALUES ('Calabresa', 38.5, '/img/calabresa.jpg', 1, 27),
('Pepperoni', 48.55, '/img/pepperoni.jpg', 0, 24),
('Marguerita', 33.5, '/img/marguerita.jpg', 0, 3),
('Quatro Queijos', 38.5, '/img/quatroqueijos.jpg', 1, 3),
('Portuguesa', 40.5, '/img/portuguesa.jpg', 1, 3),
('Napolitana', 55.5, '/img/napolitana.jpg', 1, 1),
('Baiana', 38.5, '/img/baiana.jpg', 1, 1),
('Meat & Bacon', 38.5, '/img/meat_bacon.jpg', 1, NULL),
('Rúcula', 38.5, '/img/rucula.jpg', 1, 1);

-- Inserir ingredientes de cada pizza
INSERT INTO pizza_ingredientes (pizza_id, ingrediente_id)
VALUES (1, 1), (1, 2), (1, 3),
(2, 1), (2, 4), (2, 3),
(3, 1), (3, 5), (3, 6),
(4, 1), (4, 7), (4, 8), (4, 9),
(5, 1), (5, 3), (5, 10), (5, 11), 
(6, 3), (6, 10), (6, 11), (6, 1), (6, 12),
(7, 1), (7, 7), (7, 8), (7, 9),
(8, 1), (9, 1), (9, 5), (9, 7), (9, 8), (9, 9);

-- Inserir dados
INSERT INTO usuarios (id, nome, email, senha) VALUES
(2, 'Bruno Bezerra', 'bruno@bezerra.com', 'abcde'),
(4, 'Raul', 'raul@globo.com', '$2b$10$aLgye6UWdHYWVpbzXL1DhePNPr7YYIKsanzQoKwMrRj3mmt7kDO16'),
(5, 'Alexandre de Moraes', 'xandao@stf.org', '$2b$10$RC4XOgG8CZt9CIekMEsvBekmrxWN15/DIaDLHjotYa5zVnYDSmSvW'),
(123, 'Raul das Flores', 'raul@dasflores.com', '$2b$10$GNgYOfJ20Uit0vYaaaFp5OVtXOPEQu4EDOj06O1VHH781TWru4Alu');

INSERT INTO enderecos (usuario_id, endereco) VALUES
(2, 'Rua das Camélias, 99'),
(2, 'teste'),
(4, 'Av das Espatódeas, 55'),
(4, 'Novo endereço de Raul'),
(4, 'tttttttt'),
(5, 'Algum lugar em Brasília'),
(123, 'Rua das Camélias, 99');

INSERT INTO formas_de_pagamento (nome) VALUES
('Cartão de crédito'),
('Boleto bancário'),
('Transferência bancária');




INSERT INTO pedidos
(id,
usuario_id,
obs,
total,
data,
forma_pagamento_id)
VALUES
(1,
2,
'Pedido para entrega',
77.0,
'2022-03-15 18:30:00',
1),
(2,
4,
'Pizza meio a meio',
145.65,
'2022-03-16 19:45:00',
2),
(3,
5,
'Pizza vegetariana',
33.5,
'2022-03-17 20:15:00',
1),
(4,
2,
'Pizza com borda recheada',
77.0,
'2022-03-18 21:30:00',
3),
(5,
4,
'Pizza de frango com catupiry',
40.5,
'2022-03-19 22:00:00',
2),
(6,
5,
'Pizza meio a meio',
115.5,
'2022-03-20 23:15:00',
2);


INSERT INTO pedido_pizza
(pedido_id,
pizza_id,
quantidade,
preco_unitario,
obs)
VALUES
(1,
1,
2,
38.5,
'Pizza com borda recheada de catupiry e refrigerante sabor guaraná'),
(1,
3,
2,
38.5,
'Pizza com borda recheada de catupiry e refrigerante sabor guaraná'),
(1,
5,
2,
38.5,
'Pizza com borda recheada de catupiry e refrigerante sabor guaraná'),
(2,
2,
3,
48.55,
'Pizza meio a meio: calabresa com cebola e portuguesa com ovo, borda recheada com cheddar e refrigerante sabor cola'),
(2,
5,
3,
48.55,
'Pizza meio a meio: calabresa com cebola e portuguesa com ovo, borda recheada com cheddar e refrigerante sabor cola'),
(2,
1,
3,
48.55,
'Pizza meio a meio: calabresa com cebola e portuguesa com ovo, borda recheada com cheddar e refrigerante sabor cola'),
(3,
4,
1,
33.5,
'Pizza vegetariana com refrigerante sabor limão'),
(4,
5,
2,
38.5,
'Pizza com borda recheada de catupiry e refrigerante sabor guaraná'),
(5,
6,
1,
40.5,
'Pizza de frango com catupiry, borda recheada de cheddar e refrigerante sabor cola'),
(5,
7,
3,
38.5,
'Pizza meio a meio: calabresa com cebola e quatro queijos, refrigerante sabor guaraná');


INSERT INTO pedidos (usuario_id, total, data, obs, forma_pagamento_id)
VALUES
( 2, 38.5, '2022-03-15 18:30:00', 'Sem cebola', 1),
( 4, 48.55, '2022-03-16 19:45:00', '',  2),
( 5, 33.5, '2022-03-17 20:15:00', '',  1),
( 2, 38.5, '2022-03-18 21:30:00', '',  3),
( 4, 40.5, '2022-03-19 22:00:00', '',  2),
( 5, 38.5, '2022-03-20 23:15:00', '',  1);


INSERT INTO cashbacks (id, pedido_id, valor)
VALUES
  (1, 1, 5.00),
  (2, 2, 7.00),
  (3, 3, 0.00),
  (4, 4, 10.00),
  (5, 5, 3.00),
  (6, 6, 0.00);





SELECT
p.nome AS nome_pizza,
GROUP_CONCAT(i.nome SEPARATOR ', ') AS ingredientes,
SUM(pp.quantidade * pp.preco_unitario) AS total,
o.data,
u.nome AS nome_usuario,
u.email,
u.senha
FROM pedidos AS o
JOIN pedido_pizza AS pp ON o.id = pp.pedido_id
JOIN pizzas AS p ON pp.pizza_id = p.id
JOIN pizza_ingredientes AS pi ON pi.pizza_id = p.id
JOIN ingredientes AS i ON pi.ingrediente_id = i.id
JOIN usuarios AS u ON o.usuario_id = u.id

GROUP BY p.nome,
o.data,
u.nome,
u.email,
u.senha;




