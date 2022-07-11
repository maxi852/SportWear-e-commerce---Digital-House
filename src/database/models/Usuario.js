module.exports = (sequelize, dataTypes) => {
  const Usuario = sequelize.define(
    "Usuario",
    (Cols = {
      idusuario: {
        autoIncrement: true,
        primaryKey: true,
        type: dataTypes.INTEGER,
      },
      nombre: {
        type: dataTypes.STRING,
      },
      apellido: {
        type: dataTypes.STRING,
      },
      email: {
        type: dataTypes.STRING,
      },
      password: {
        type: dataTypes.STRING,
      },
      profile_image: {
        type: dataTypes.STRING,
      },
      tipo_usuario: {
        type: dataTypes.INTEGER,
      },
    }),
    {
      tableName: "usuario",
      timestamps: false,
    }
  );
  return Usuario;
};
