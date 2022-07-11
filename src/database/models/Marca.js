module.exports = (sequelize, dataTypes) => {
  const Marca = sequelize.define(
    "Marca",
    (Cols = {
      idmarca: {
        autoIncrement: true,
        primaryKey: true,
        type: dataTypes.INTEGER,
      },
      nombre: {
        type: dataTypes.STRING,
      },
    }),
    {
      tableName: "marca",
      timestamps: false,
    }
  );

  Marca.associate = (models) => {
    Marca.hasMany(models.Producto, {
      as: "marcaProducto",
      foreignKey: "marca_id",
    });
  };

  return Marca;
};
