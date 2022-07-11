const express = require("express");
const detalleUsuarioController = require("../controllers/controllerUsuario.js");
const multer = require("multer");
const { body } = require("express-validator");
const path = require("path");

const router = express.Router();

//**Configuración de Multer */

let multerDiskStorage = multer.diskStorage({
  destination: (req, file, callback) => {
    let folder = path.join(__dirname + "../../../public/images/profileImages");
    callback(null, folder);
  },
  filename: (req, file, callback) => {
    let imageName =
      Date.now() + "nuevaImagen" + path.extname(file.originalname);
    callback(null, imageName);
  },
});

const fileUpload = multer({
  storage: multerDiskStorage,
  fileFilter: (req, file, callback) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg" ||
      file.mimetype == "image/gif"
    ) {
      callback(null, true);
    } else {
      callback(null, false);
      return callback();
    }
  },
});

// **Validaciones**

let registerValidator = [
  body("nombre").notEmpty().withMessage("Debes llenar el campo de 'nombre'"),
  body("apellido")
    .notEmpty()
    .withMessage("Debes llenar el campo de 'apellido'"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Debes crear una contraseña con mínimo 6 caractéres"),
];

router.get("/", detalleUsuarioController.mostrar);
router.put(
  "/",
  fileUpload.single("profileImage"),
  registerValidator,
  detalleUsuarioController.editarUsuario
);
router.get("/:id", detalleUsuarioController.detalleUsuario);

module.exports = router;
