const db = require("../database/models");
const Op = db.Sequelize.Op;

const indexController = {
  index: function (req, res) {
    let search = req.query;
    res.render("index", { search: search });
  },
  detalleProducto: function (req, res) {
    res.render("detalle_del_producto");
  },
  search: (req, res) => {
    let querySearch = req.body.search;
    console.log(querySearch);

    db.Producto.findAll({
      where: {
        nombre: { [Op.like]: "%" + req.query.keyword + "%" },
      },
    }).then((products) => {
      res.render("searchProducts", { products: products });
    });
  },
};

module.exports = indexController;
