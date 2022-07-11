const express = require("express");
const router = express.Router();
const cors = require("cors");
const apiUsersController = require("../../controllers/api/apiControllerusers");
router.use(cors());

router.get("/", apiUsersController.show);
router.get("/:id", apiUsersController.userDetail);

module.exports = router;
