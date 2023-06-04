var usuarioModel = require("../models/usuarioModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    usuarioModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function entrar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.entrar(email, senha)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}


function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, email, senha)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


function listarEndereco(req, res) {
    var idUsuario = req.params.idUsuario;
    usuarioModel.listarEndereco(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function adicionarEnderco(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    
    var idUsuario = req.body.idUsuarioServer;
    var cep = req.body.cepServer;
    var logradouro = req.body.logradouroServer;
    var bairro = req.body.bairroServer;
    var cidade = req.body.cidadeServer;
    var estado =req.body.estadoServer;
    var num = req.body.numSever;
    

    // Faça as validações dos valores
    if (cep == undefined) {
        res.status(400).send("Seu cep está undefined!");
    } else if (logradouro == undefined) {
        res.status(400).send("Seu logradouro está undefined!");
    } else if (bairro == undefined) {
        res.status(400).send("Sua bairro está undefined!");
    }else if (cidade == undefined) {
        res.status(400).send("Sua cidade está undefined!");
    }else if (estado == undefined) {
        res.status(400).send("Sua estado está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.adicionarEnderco(cep, estado, cidade,logradouro,bairro, idUsuario, num )
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


function cadastrarLivro(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var linkManga = req.body.linkMangaServer;
    var nomeLivro = req.body.nomeLivroServer;
    var descriManga = req.body.descriMangaServer;
    var generoManga = req.body.generoMangaServer;
    var qtdPáginas = req.body.qtdPáginasServer;
    var idioma = req.body.idiomaServer;
    var editora = req.body.editoraServer;
    var autor = req.body.autorServer;
    var fkUsuario = req.body.fkUsuarioServer;
    // Faça as validações dos valores
    if (nomeLivro == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrarLivro(linkManga, nomeLivro, descriManga, generoManga, qtdPáginas, idioma, editora, autor, fkUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


function comentar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var titulo = req.body.tituloServer;
    var desc = req.body.descServer;
    var idManga = req.body.idMangaServer;
    var idUsuario = req.body.idUsuarioServer;

    if (titulo == undefined) {
        res.status(400).send("Seu titulo está undefined!");
    } else if (desc == undefined) {
        res.status(400).send("Sua descrição está undefined!");
    } else if (idManga == undefined) {
        res.status(400).send("Manga não existe!");
    } else if (idUsuario == undefined) {
        res.status(400).send("Faça login primeiro!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.comentar(titulo, desc, idManga, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


function editar(req, res) {
    var imagem = req.body.linkImagem;
    var idUsuario = req.params.idUsuario;
    var nomeNovo = req.body.nomeNovo;
    var emailNovo = req.body.emailNovo;

    usuarioModel.editar(imagem, nomeNovo, emailNovo, idUsuario)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );

}


function endereco(req, res) {
    var imagem = req.body.linkImagem;
    var idUsuario = req.params.idUsuario;
    var nomeNovo = req.body.nomeNovo;
    var emailNovo = req.body.emailNovo;

    usuarioModel.editar(imagem, nomeNovo, emailNovo, idUsuario)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );

}

function editarLivro(req, res) {
    var idManga = req.params.idManga;
    var linkImagem = req.body.linkMangaServer
    var nomeLivro = req.body.nomeLivroServer
    var descriManga = req.body.descriMangaServer
    var generoManga = req.body.generoMangaServer
    var qtdPaginas = req.body.qtdPáginasServer
    var idioma = req.body.idiomaServer
    var editora = req.body.editoraServer
    var autor = req.body.autorServer

    console.log("controollers");
    usuarioModel.editarLivro(idManga, linkImagem, nomeLivro, descriManga, generoManga, qtdPaginas, idioma, editora, autor)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );

}

function responder(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var descResposta = req.body.descRespostaServer;
    var idComentario = req.body.idComentarioServer;
    var idManga = req.body.idMangaServer;
    var idUsuario = req.body.idUsuarioServer;
    if (descResposta == undefined) {
        res.status(400).send("Seu titulo está undefined!");
    } else if (idComentario == undefined) {
        res.status(400).send("Sua descrição está undefined!");
    } else if (idManga == undefined) {
        res.status(400).send("Manga não existe!");
    } else if (idUsuario == undefined) {
        res.status(400).send("Faça login primeiro!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.responder(idComentario, descResposta, idManga, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
module.exports = {
    entrar,
    cadastrar,
    cadastrarLivro,
    listar,
    editar,
    editarLivro,
    listarEndereco,
    comentar,
    adicionarEnderco,
    responder,
    testar
}