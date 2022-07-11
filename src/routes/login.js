const express = require("express");
const loginController = require("../controllers/controllerLogin.js");
const router = express.Router();
const { body } = require("express-validator");
const isLoggedMiddleware = require("../middlewares/loggedMiddleware");

let loginValidator = [
  body("email").notEmpty().isEmail().withMessage("Debes llenar este campo"),
  body("password").notEmpty().withMessage("Debes llenar este campo"),
];

router.get("/", isLoggedMiddleware, loginController.loginRoute);
router.post("/", loginValidator, loginController.loginProcess);

module.exports = router;
