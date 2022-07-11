const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const db = require("../database/models");

const usuario = db.Usuario;

const loginController = {
  loginRoute: function (req, res) {
    res.render("login");
  },
  loginProcess: (req, res) => {
    let errores = validationResult(req);
    let usuarioLogged;
    let { password, email } = req.body;

    if (!errores.isEmpty()) {
      return res.render("login", { errors: errores.mapped() });
    } else {
      usuario
        .findOne({
          where: {
            email: email,
          },
        })
        .then((user) => {
          if (!user) {
            return res.render("login", {
              errors: {
                email: {
                  msg: "Email no encontrado",
                },
              },
            });
          } else {
            let validation = bcrypt.compareSync(password, user.password);
            console.log(validation);
            if (bcrypt.compareSync(password, user.password)) {
              usuarioLogged = user;

              req.session.usuarioLogged = usuarioLogged;

              if (req.body.recordame != undefined) {
                res.cookie("recordar", usuarioLogged.email, {
                  maxAge: 1000000,
                });
              }

              res.redirect("/usuario");
            } else {
              return res.render("login", {
                errors: {
                  password: {
                    msg: "Las crédenciales son inválidas",
                  },
                },
              });
            }
          }
        });
    }
  },
};

module.exports = loginController;
