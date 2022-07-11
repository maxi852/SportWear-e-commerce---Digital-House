const express = require("express");
const carritoController = require("../controllers/controllerCarrito.js");

const router = express.Router();

router.get("/", carritoController.carritoRoute)

module.exports=router