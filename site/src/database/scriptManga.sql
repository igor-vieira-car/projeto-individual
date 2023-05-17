CREATE DATABASE mangaverse;
use mangaverse;
DROP DATABASE mangaverse;
CREATE TABLE usuario(
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nomeUsuario VARCHAR(45),
    emailUsuario VARCHAR(45),
    senhaUsuario VARCHAR(45)
);

CREATE TABLE manga(
	idManga INT primary KEY auto_increment,
	linkImagem VARCHAR(500),
	nomeManga VARCHAR(45),
    descriManga VARCHAR(500),
    genero VARCHAR(45),
    qtdPaginas VARCHAR(45),
	idioma VARCHAR(50),
    editora VARCHAR(50),
    autor VARCHAR (50)
);
select * from usuario;	
select * from manga;

DESC usuario;
DESC manga;