const express = require("express");
const detalleProductoController = require("../controllers/controllerIndex.js");

const router = express.Router();

router.post("/", detalleProductoController.procesaFormulario);

module.exports = router;
