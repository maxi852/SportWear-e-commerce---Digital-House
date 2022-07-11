const express = require("express");
const controllerFormProduct = require("../controllers/controllerFormProduct");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { body, check } = require("express-validator");

//**Configuración de Multer */

let multerDiskStorage = multer.diskStorage({
  destination: (req, file, callback) => {
    let folder = path.join(__dirname + "/../../public/images/our_products");
    callback(null, folder);
    console.log(folder);
  },
  filename: (req, file, callback) => {
    let imageName = Date.now() + path.extname(file.originalname);
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

//**express validator */

let productValidator = [
  body("name")
    .notEmpty()
    .withMessage("Debe llenar este campo")
    .isLength({ min: 5 })
    .withMessage("El nombre del producto debe ser de mínimo 5 caractéres"),
  body("description")
    .notEmpty()
    .withMessage("Debe llenar este campo")
    .isLength({ min: 20 })
    .withMessage("La descripción debe ser de mínimo 20 caractéres"),
  body("precio").notEmpty().withMessage("Este campo no puede estar vacío"),
];

router.get("/", controllerFormProduct.index);
router.get("/detail/:id", controllerFormProduct.detalleProducto);
router.get("/crear", controllerFormProduct.crearProducto);
router.post(
  "/crear",
  fileUpload.single("productImage"),
  productValidator,
  controllerFormProduct.procesaCrearFormulario
);

router.get("/editar/:id", controllerFormProduct.editar);
router.put(
  "/editar/:id",
  fileUpload.single("productImage"),
  productValidator,
  controllerFormProduct.editarProducto
);
router.delete("/borrar/:id", controllerFormProduct.borrar);

module.exports = router;
