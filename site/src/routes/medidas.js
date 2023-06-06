var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:idAquario", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:idAquario", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

router.get("/maisVistos/:idUsuario", function (req, res) {
    medidaController.maisVistos(req, res);
})

router.get("/tempo-real-visu/:idUsuario", function (req, res) {
    medidaController.tempoRealVisu(req, res);
})


module.exports = router;