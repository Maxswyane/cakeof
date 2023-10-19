CREATE TABLE sobre
(
  quem_somos VARCHAR(200) NOT NULL,
  o_que_vendemos VARCHAR(200) NOT NULL,
  id_sobre INT NOT NULL,
  img_direita INT NOT NULL,
  img_esquerda INT NOT NULL,
  PRIMARY KEY (id_sobre)
);

CREATE TABLE produto
(
  id_produto INT NOT NULL,
  descricao VARCHAR(200) NOT NULL,
  titulo VARCHAR NOT NULL,
  PRIMARY KEY (id_produto)
);

CREATE TABLE pedidos
(
  id_pedido INT NOT NULL,
  nome VARCHAR(100) NOT NULL,
  telefone VARCHAR(15) NOT NULL,
  data DATETIME NOT NULL,
  data_entrega DATETIME NOT NULL,
  tamanho TINYINT NOT NULL,
  PRIMARY KEY (id_pedido)
);

CREATE TABLE contato
(
  instagram VARCHAR(20) NOT NULL,
  facebook VARCHAR(20) NOT NULL,
  youtube VARCHAR(50) NOT NULL,
  tiktok VARCHAR(20) NOT NULL,
  endereco VARCHAR(20) NOT NULL,
  email VARCHAR(50) NOT NULL,
  telefone INT NOT NULL,
  id_contato INT NOT NULL,
  PRIMARY KEY (id_contato)
);

CREATE TABLE sabores
(
  id_sabor INT NOT NULL,
  titulo VARCHAR(100) NOT NULL,
  descricao VARCHAR(100) NOT NULL,
  id_produto INT NOT NULL,
  PRIMARY KEY (id_sabor),
  FOREIGN KEY (id_produto) REFERENCES produto(id_produto)
);

CREATE TABLE fotos_galeria
(
  id_foto INT NOT NULL,
  arquivo VARCHAR(50) NOT NULL,
  local_foto VARCHAR(50) NOT NULL,
  id_sabor INT NOT NULL,
  PRIMARY KEY (id_foto),
  FOREIGN KEY (id_sabor) REFERENCES sabores(id_sabor)
);

CREATE TABLE itens_pedido
(
  id_pedido INT NOT NULL,
  id_sabor INT NOT NULL,
  PRIMARY KEY (id_pedido, id_sabor),
  FOREIGN KEY (id_pedido) REFERENCES pedidos(id_pedido),
  FOREIGN KEY (id_sabor) REFERENCES sabores(id_sabor)
);
