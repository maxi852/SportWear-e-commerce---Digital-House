const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const db = require("../database/models");

const usuarios = db.Usuario;

const registerController = {
  registerView: (req, res) => {
    res.render("register");
  },
  registerProcess: (req, res) => {
    let errores = validationResult(req);
    let profileImage = req.file;

    const multerCheck = (file) => {
      if (
        file.mimetype == "image/png" ||
        file.mimetype == "image/jpg" ||
        file.mimetype == "image/jpeg" ||
        file.mimetype == "image/gif"
      ) {
        return true;
      }
      return false;
    };

    if (
      errores.isEmpty() &&
      profileImage !== undefined &&
      multerCheck(profileImage)
    ) {
      usuarios
        .findOrCreate({
          where: {
            email: req.body.email,
          },
          defaults: {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            password: bcrypt.hashSync(req.body.password, 10),
            profile_image: req.file.filename,
            tipo_usuario: req.body.tipoUsuario,
          },
        })
        .then(([user, created]) => {
          if (created) {
            res.redirect("/login");
          }

          res.render("register", {
            errors: {
              email: {
                msg: "Este email ya está en uso",
              },
            },
          });
        });
    }

    //**Falta afragar logica para confirmar que las contraseñas son iguales en el register**
    else {
      return res.render("register", {
        errors: {
          profileImage: {
            msg: "Solo extensiones .png, .jpg .jpeg y .gif son válidas",
          },
          ...errores.mapped(),
        },
      });
    }
  },
};

module.exports = registerController;
