module.exports = (sequelize, dataTypes) => {
  const Producto = sequelize.define(
    "Producto",
    (Cols = {
      idproducto: {
        autoIncrement: true,
        primaryKey: true,
        type: dataTypes.INTEGER,
      },
      nombre: {
        type: dataTypes.STRING,
      },
      descripcion: {
        type: dataTypes.STRING,
      },
      color: {
        type: dataTypes.STRING,
      },
      precio: {
        type: dataTypes.INTEGER,
      },
      image: {
        type: dataTypes.STRING,
      },
      tipo_calzado_id: {
        type: dataTypes.INTEGER,
      },
      marca_id: {
        type: dataTypes.INTEGER,
      },
    }),
    {
      tableName: "producto",
      timestamps: false,
    }
  );

  Producto.associate = (models) => {
    Producto.belongsTo(models.TipoCalzado, {
      as: "tipoCalzado",
      foreignKey: "tipo_calzado_id",
    });
  };

  Producto.associate = (models) => {
    Producto.belongsTo(models.Marca, {
      as: "productoMarca",
      foreignKey: "marca_id",
    });
  };

  // const productoTalle = sequelize.define(
  //   "Productotalle",
  //   (Cols = {
  //     idproducto_talle: {
  //       autoIncrement: true,
  //       primaryKey: true,
  //       type: dataTypes.INTEGER,
  //     },
  //     producto_id: {
  //       type: dataTypes.INTEGER,
  //     },
  //     talle_id: {
  //       type: dataTypes.INTEGER,
  //     },
  //   }),
  //   { tableName: "producto_talle", timestamps: false }
  // );

  Producto.associate = (models) => {
    Producto.belongsToMany(models.Talle, { through: "producto_talle" });
  };

  return Producto;
};
