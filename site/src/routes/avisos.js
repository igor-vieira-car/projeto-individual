var express = require("express");
var router = express.Router();

var avisoController = require("../controllers/avisoController");

router.get("/", function (req, res) {
    avisoController.testar(req, res);
});

router.get("/listar", function (req, res) {
    avisoController.listar(req, res);
});
router.get("/listarLivro", function (req, res) {    
    avisoController.listarLivro(req, res);
});

router.get("/maisRecentes", function (req, res) {    
    avisoController.maisRecentes(req, res);
});

router.get("/pagManga/:idManga", function (req, res) {    
    avisoController.pagManga(req, res);
});

router.get("/pesquisar/:pesquisarVar", function (req, res) {
    avisoController.pesquisar(req, res);
});
router.get("/listar/:idUsuario", function (req, res) {
    avisoController.listarPorUsuario(req, res);
});

router.get("/pesquisar/:descricao", function (req, res) {
    avisoController.pesquisarDescricao(req, res);
});

router.post("/publicar/:idUsuario", function (req, res) {
    avisoController.publicar(req, res);
});


module.exports = router;