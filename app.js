const express = require("express");
const methodOverride = require("method-override"); //este metodo es para aplicar los metodos de HTTP (PUT, DELETE)
const session = require("express-session");
const cookieParser = require("cookie-parser");
const path = require("path");
const bcrypt = require("bcryptjs");
const recordameMiddleware = require("./src/middlewares/recordameCookieMiddleware");

const app = express();

//ROUTER
const routerIndex = require("./src/routes/index.js");
const routerLogin = require("./src/routes/login.js");
const routerRegister = require("./src/routes/register.js");
const routerCarrito = require("./src/routes/carrito.js");
const routerProducts = require("./src/routes/formProduct.js");
const routerUsers = require("./src/routes/usuario.js");

//API ROUTER
const routerApiUsers = require("./src/routes/api/apiUsers");
const routerApiProducts = require("./src/routes/api/apiProducts");

app.use(session({ secret: "secreto" }));
//MIDDLEWARES
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(methodOverride("_method"));
app.use(recordameMiddleware);

//EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

//RUTAS
app.use("/", routerIndex);
app.use("/login", routerLogin);
app.use("/register", routerRegister);
app.use("/cart", routerCarrito);
app.use("/products", routerProducts);
app.use("/usuario", routerUsers);

//API RUTAS
app.use("/api/users", routerApiUsers);
app.use("/api/products", routerApiProducts);

let port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Servidor funcionando en el puerto ${port}`);
});
