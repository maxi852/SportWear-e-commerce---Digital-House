const isLogged = (req, res, next) => {
  if (req.session.usuarioLogged !== undefined) {
    res.render("alreadyLogged");
  } else {
    next();
  }
};

module.exports = isLogged;
