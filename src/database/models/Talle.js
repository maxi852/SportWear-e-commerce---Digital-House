module.exports = (sequelize, dataTypes) => {
  const Talle = sequelize.define(
    "Talle",
    (Cols = {
      idtalle: {
        autoIncrement: true,
        primaryKey: true,
        type: dataTypes.INTEGER,
      },
      talle: {
        type: dataTypes.INTEGER,
      },
    }),
    {
      tableName: "talle",
      timestamps: false,
    }
  );
  return Talle;
};
