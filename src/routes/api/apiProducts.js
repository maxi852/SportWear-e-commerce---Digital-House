const express = require("express");
const router = express.Router();
const cors = require("cors");
const apiProductsController = require("../../controllers/api/apiControllerProducts");
router.use(cors());

router.get("/", apiProductsController.show);
router.get("/:id", apiProductsController.productDetail);

module.exports = router;
