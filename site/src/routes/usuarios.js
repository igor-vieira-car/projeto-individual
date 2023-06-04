var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
});

router.post("/comentar", function (req, res) {
    usuarioController.comentar(req, res);
});

router.post("/adicionarEnderco", function (req, res) {
    usuarioController.adicionarEnderco(req, res);
});

router.post("/responder", function (req, res) {
    usuarioController.responder(req, res);
});

router.post("/cadastrarLivro", function (req, res) {
    usuarioController.cadastrarLivro(req, res);
});

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

router.put("/editar/:idUsuario", function (req, res) {
    usuarioController.editar(req, res);
});

router.put("/endereco/:idUsuario", function (req, res) {
    usuarioController.endereco(req, res);
});

router.get("/listarEndereco/:idUsuario", function (req, res) {
    usuarioController.listarEndereco(req, res);
});


router.put("/editarLivro/:idManga", function (req, res) {
    usuarioController.editarLivro(req, res);
});


module.exports = router;