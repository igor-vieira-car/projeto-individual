CREATE DATABASE mangaverse;
use mangaverse;
DROP DATABASE mangaverse;

CREATE TABLE usuario(
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    linkFotoPerfil VARCHAR(1000),
    nomeUsuario VARCHAR(45),
    emailUsuario VARCHAR(45),
	senhaUsuario VARCHAR(45)
);
CREATE TABLE endereco(
	idEndereço INT PRIMARY KEY AUTO_INCREMENT,
    cep char(8),
    logradouro VARCHAR(100),
    bairro VARCHAR(100),
    cidade VARCHAR(100),
    Estado VARCHAR(100),
    num VARCHAR(45),
    fkUsuarioEndereco INT,
	CONSTRAINT fkUsuarioEndereco FOREIGN KEY (fkUsuarioEndereco) REFERENCES usuario(idUsuario) ON DELETE CASCADE
   
);
CREATE TABLE comentarioManga(
	idComentario INT auto_increment,
		tituloComentario VARCHAR(100),
    descComentario VARCHAR(255),
    fkManga INT,
    fkUsuario INT,
    fkResposta INT,
    constraint comentarioManga FOREIGN KEY(fkManga)
		REFERENCES manga(idManga) ON DELETE CASCADE,
	constraint comentarioUsuario FOREIGN KEY (fkUsuario)
		REFERENCES usuario(idUsuario),
	PRIMARY KEY (idComentario ,fkUsuario, fkManga ),
    constraint recursivaResposta FOREIGN KEY(fkResposta)
		REFERENCES comentarioManga(idComentario),
    dtComentario time
);
UPDATE manga SET linkImagem = '', nomeManga = '', descriManga = '', genero = '', qtdPaginas = '', idioma = '', editora ='', autor ='' WHERE idManga = '';
CREATE TABLE manga (
    idManga INT PRIMARY KEY AUTO_INCREMENT,
    linkImagem VARCHAR(1000),
    nomeManga VARCHAR(45),
    descriManga VARCHAR(1000),
    genero VARCHAR(45),
    qtdPaginas VARCHAR(45),
    idioma VARCHAR(50),
    editora VARCHAR(50),
    autor VARCHAR(50), 
    clicks INT,
    dtLancamento timestamp,
    fkUsuario INT,
	constraint mangaUsuario FOREIGN KEY (fkUsuario)
		references usuario(idUsuario)
);
INSERT INTO usuario VALUES (NULL, NULL, 'igor', 'igor@gmail', '1234');
INSERT INTO comentarioManga (tituloComentario, descComentario, fkManga, fkUsuario, dtComentario)  VALUES('a', 'a', 2, 1, CURRENT_TIMESTAMP);


UPDATE usuario SET linkFotoPerfil = 'a', nomeUsuario = 'a', emailUsuario = '' where idUsuario = 1;


SELECT * FROM comentarioManga;

SELECT idComentario, tituloComentario, descComentario, dtComentario, nomeUsuario, emailUsuario, comentarioManga.fkUsuario FROM manga JOIN comentarioManga 
	ON idManga = fkManga
		JOIN usuario 
			on idUsuario = comentarioManga.fkUsuario
				WHERE idManga = 11 and fkResposta is null;

SELECT * FROM comentarioManga JOIN usuario
	ON fkUsuario = idUsuario;
SELECT * FROM manga;
SELECT SUM(clicks) from manga JOIN usuario
	ON fkUsuario = idUsuario
		WHERE idUsuario = 1;
        
        
        
SELECT * FROM comentarioManga;
SELECT * FROM usuario;
    select * from manga;
    
SELECT * FROM manga ORDER BY dtLancamento;
SELECT * FROM usuario;	
SELECT * FROM manga;	
SELECT idManga FROM manga;
DESC usuario;
DESC manga;
desc comentarioManga;
DELETE FROM comentarioManga WHERE fkManga = 2 order by fkResposta;
DELETE FROM comentarioManga WHERE fkResposta = 2;
	  INSERT INTO manga (linkImagem, nomeManga, descriManga, genero, qtdPaginas, idioma, editora, autor, dtLancamento, fkUsuario)
	VALUES('${linkManga}', '${nomeLivro}', '${descriManga}', '${generoManga}', '${qtdPáginas}', '${idioma}', '${editora}', '${autor}', CURRENT_TIMESTAMP, 1);
INSERT INTO manga VALUES
	(NULL, 'https://static3.mangalivre.net/capas/aWkmg_q91Rd3SRIaDEKB_Q/15807/633da58f69d6f_external_cover.jpg', 'Our Tyrant Became Young', 'Eu havia possuído uma personagem dentro de um livro. No livro em que empurrei a protagonista feminina x Imperador. No dia em que chorei sobre os dois personagens que não acabaram juntos, fui enviada para cá para viver toda essa história',
			'Ação', '39', 'pt-br', 'Koara', ' Manhwa',0, CURRENT_TIMESTAMP, 1),
	(NULL, 'https://upload.wikimedia.org/wikipedia/pt/thumb/4/45/Berserk_vol01.jpg/220px-Berserk_vol01.jpg', 'Berserk','Berserk (ベルセルク Beruseruku?) é uma série de mangá escrita e ilustrada por Kentaro Miura. Situado em um mundo de fantasia sombria inspirado na Europa medieval, a história gira em torno de Guts, um solitário mercenário, e Griffith, o líder de um bando de mercenários chamado de "Bando do Falcão',
			'fantasia','40 ','pt-br', 'Yasuhiro Imagawa', 'Nippon TV',0, CURRENT_TIMESTAMP, 1),
	(NULL, 'https://static3.mangalivre.net/capas/gCkzktc36fgfrvMt4tKJAg/14627/61fc8914694e7external_cover.jpg', 'My Secret Brother', 'Lee Hanmi cometeu um grande erro no seu primeiro dia',
			'Comédia','48','pt-br', 'Willow', 'Willow', 0,CURRENT_TIMESTAMP, 1),
	(NULL, 'https://static3.mangalivre.net/capas/cbjjgC_ceJfurAvi8O9ddw/8435/external_cover.jpg', 'My Lord, the Wolf Queen', 'Kang Jun, um príncipe de uma pequena nação do Oriente, foi tomado como refém depois que seu país foi derrotado pelo Ocidente. Lá ele conhece Rosaline, a rainha que detinha grande poder e absoluta soberania sobre o país.',
			'Drama','30','pt-br', 'Kim Soo Oh', 'Lady Otomen Projec', 0,CURRENT_TIMESTAMP, 1),
	(NULL, 'https://static3.mangalivre.net/capas/RCCZHtMmaNEjVbaSv9f89Q/15317/6294cddc0449d_external_cover.jpg', 'Tsukanoma no Ichika', 'Na primavera de seu segundo ano do ensino médio, Sendawara Ichika foi informada por seu médico que ela tinha dois anos de vida. Três anos se passaram. Agora na faculdade, Ichika, passa seus dias sem saber quando chegará o fim. Um dia por acaso, ela encontra seu ex-professor de filosofia. Uma história de amor entre uma garota, cuja a vida está ficando mais curta, e um homem que aos poucos está tentando desaparecer.',
			'Drama', '31', 'pt-br', 'Imai Masako',' NTV', 0,CURRENT_TIMESTAMP, 1);
            

SELECT idComentario, tituloComentario, descComentario, dtComentario, nomeUsuario, emailUsuario FROM manga JOIN comentarioManga 
	ON idManga = fkManga
		JOIN usuario 
			on fkU;
    
SELECT nomeManga ,clicks FROM usuario JOIN manga
ON idUsuario = fkUsuario
    WHERE idUsuario= 1 order by clicks desc limit 4;	
