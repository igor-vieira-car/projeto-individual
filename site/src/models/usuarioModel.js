var database = require("../database/config")

function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT * FROM usuario WHERE emailUsuario = '${email}' AND senhaUsuario = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nome, email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO usuario (nomeUsuario, emailUsuario, senhaUsuario) VALUES ('${nome}', '${email}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function cadastrarLivro(linkManga, nomeLivro, descriManga, generoManga, qtdPáginas, idioma, editora, autor, fkUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", linkManga, nomeLivro, descriManga, generoManga, qtdPáginas, idioma, editora, autor, fkUsuario);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO manga (linkImagem, nomeManga, descriManga, genero, qtdPaginas, idioma, editora, autor, clicks,dtLancamento, fkUsuario)
	VALUES('${linkManga}', '${nomeLivro}', '${descriManga}', '${generoManga}', '${qtdPáginas}', '${idioma}','${editora}', '${autor}', 0, CURRENT_TIMESTAMP, ${fkUsuario}  );
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function comentar(titulo, desc, idManga, idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", titulo, desc, idManga, idUsuario);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
    INSERT INTO comentarioManga (tituloComentario, descComentario, fkManga, fkUsuario, dtComentario)    VALUES('${titulo}', '${desc}', ${idManga}, ${idUsuario}, CURRENT_TIMESTAMP);
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarEndereco(idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", idUsuario)
    var instrucao = `
   
    SELECT * FROM endereco WHERE fkUsuarioEndereco = 1;
 `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function editar(imagem, nomeNovo, emailNovo, idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ", imagem, nomeNovo, emailNovo, idUsuario);
    var instrucao = `
        
        UPDATE usuario SET linkFotoPerfil = '${imagem}', nomeUsuario = '${nomeNovo}', emailUsuario = '${emailNovo}' where idUsuario = ${idUsuario};
`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}



function editarLivro(idManga, linkImagem, nomeLivro, descriManga, generoManga, qtdPaginas, idioma, editora, autor) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ", idManga, linkImagem, nomeLivro, descriManga, generoManga, qtdPaginas, idioma, editora, autor);
    var instrucao = `
        
    UPDATE manga SET linkImagem = '${linkImagem}', nomeManga = '${nomeLivro}', descriManga = '${descriManga}', genero = '${generoManga}', qtdPaginas = '${qtdPaginas}', idioma = '${idioma}', editora ='${editora}', autor ='${autor}' WHERE idManga = ${idManga};
`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}




function visuLivro(idManga) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ", idManga);
    var instrucao = `
    UPDATE manga SET clicks = clicks + 1 WHERE idManga = ${idManga};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function adicionarEnderco(cep, estado, cidade, logradouro, bairro, idUsuario, num) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", cep, estado, cidade, logradouro, bairro, num, idUsuario);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        
    INSERT INTO endereco VALUES
    (null, '${cep}', '${logradouro}', '${bairro}', '${cidade}', '${estado}','${num}',  ${idUsuario});
`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function responder(idComentario, descResposta, idManga, idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", idComentario, descResposta, idManga, idUsuario);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
    INSERT INTO comentarioManga ( descComentario, fkManga, fkUsuario, fkResposta, dtComentario)
            VALUES ( '${descResposta}', ${idManga}    ,      ${idUsuario} ,      ${idComentario},        NOW());`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    entrar,
    cadastrar,
    responder,
    cadastrarLivro,
    listar,
    visuLivro,
    adicionarEnderco,
    listarEndereco,
    editarLivro,
    comentar,
    editar
};