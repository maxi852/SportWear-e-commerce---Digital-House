module.exports = (sequelize, dataTypes) => {
  const TipoCalzado = sequelize.define(
    "TipoCalzado",
    (Cols = {
      idtipo_calzado: {
        autoIncrement: true,
        primaryKey: true,
        type: dataTypes.INTEGER,
      },
      tipo_de_calzado: {
        type: dataTypes.STRING,
      },
      descripcion: {
        type: dataTypes.STRING,
      },
      genero: {
        type: dataTypes.STRING,
      },
    }),
    {
      tableName: "tipo_calzado",
      timestamps: false,
    }
  );

  TipoCalzado.associate = (models) => {
    TipoCalzado.hasMany(models.Producto, {
      as: "producto",
      foreignKey: "tipo_calzado_id",
    });
  };

  return TipoCalzado;
};
