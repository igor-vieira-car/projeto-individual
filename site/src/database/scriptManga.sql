CREATE DATABASE mangaverse;
use mangaverse;

CREATE TABLE usuario(
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nomeUsuario VARCHAR(45),
    emailUsuario VARCHAR(45),
    senhaUsuario VARCHAR(45)
);

CREATE TABLE manga(
	idManga INT primary KEY auto_increment,
    nomeManga VARCHAR(45),
    qtdCapitulos VARCHAR(45),
    linkImagem VARCHAR(500)
);