const express = require("express");
const indexController = require("../controllers/controllerIndex.js");

const router = express.Router();

router.get("/", indexController.index);
router.get("/search", indexController.search);

module.exports = router;
