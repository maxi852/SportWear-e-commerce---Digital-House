let db = require("../database/models");
let user = db.Usuario;

const recordame = (req, res, next) => {
  if (
    req.cookies.recordar != undefined &&
    req.session.usuarioLogged == undefined
  ) {
    let usuarioLogged;

    const cookieUser = user.findOne({
      where: {
        email: req.cookies.recordar,
      },
    });

    usuarioLogged = cookieUser;

    req.session.usuarioLogged = usuarioLogged;
  }

  next();
};

module.exports = recordame;
