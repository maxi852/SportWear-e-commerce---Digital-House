let db = require("../database/models");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

let usuariosController = {
  mostrar: (req, res) => {
    let usuarioLogged = req.session.usuarioLogged;
    if (!usuarioLogged) {
      res.render("login");
    } else {
      db.Usuario.findByPk(usuarioLogged.idusuario).then((usuario) => {
        // console.log(usuario);
        res.render("usuario.ejs", { usuario });
      });
    }
  },
  editarUsuario: (req, res) => {
    let errores = validationResult(req);
    let usuarioLogged = req.session.usuarioLogged;
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

    // console.log(usuarioLogged);
    if (
      errores.isEmpty() &&
      profileImage !== undefined &&
      multerCheck(profileImage)
    ) {
      db.Usuario.findByPk(usuarioLogged.idusuario).then((usuario) => {
        usuario
          .update(
            {
              nombre: req.body.nombre,
              apellido: req.body.apellido,
              email: usuario.email,
              password: bcrypt.hashSync(req.body.password, 10),
              profile_image: profileImage.filename,
              tipo_usuario: req.body.tipoUsuario,
            },
            {
              where: {
                idusuario: usuario.idusuario,
              },
            }
          )
          .then((nuevousuario) => {
            res.render("usuario", { usuario: nuevousuario });
          });
      });
    } else {
      return res.render("usuario", {
        errors: {
          profileImage: {
            msg: "Debes incluir una imágen y solo extensiones .png, .jpg .jpeg y .gif son válidas",
          },
          ...errores.mapped(),
        },
        usuario: usuarioLogged,
      });
    }
  },
  detalleUsuario: (req, res) => {
    let userId = req.params.id;

    db.Usuario.findByPk(userId).then((user) => {
      res.render("usuarioDetail", { usuario: user });
    });
  },
};

module.exports = usuariosController;
