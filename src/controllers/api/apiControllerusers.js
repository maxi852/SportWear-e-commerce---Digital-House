const db = require("../../database/models");
let users = db.Usuario;

const apiControllerUsers = {
  show: (req, res) => {
    users
      .findAll({
        attributes: ["idusuario", "nombre", "email", "profile_Image"],
      })
      .then((users) => {
        users.map((user) => {
          user.setDataValue(
            "detail",
            `http://localhost:5000/usuario/${user.idusuario}`
          );
        });

        let respuesta = {
          count: users.length,
          users: users,
        };

        res.json(respuesta);
      });
  },

  userDetail: (req, res) => {
    let userId = req.params.id;
    users
      .findOne({
        where: {
          idusuario: userId,
        },
        attributes: [
          "idusuario",
          "nombre",
          "apellido",
          "email",
          "profile_image",
        ],
      })
      .then((user) => {
        user.setDataValue(
          "profile_image",
          `/images/profileImages/${user.profile_image}`
        );
        user.setDataValue(
          "detail",
          `http://localhost:5000/usuario/${user.idusuario}`
        );
        res.json(user);
      });
  },
};

module.exports = apiControllerUsers;
