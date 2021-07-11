const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const routerApi = express.Router();
const puerto = 8080;

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

let productos = [];
let producto;

routerApi.get("/productos", (req, res) => {
  let response =
    productos.length > 0 ? productos : { error: "no hay productos cargados" };
  res.json(response);
});

routerApi.get("/productos/:id", (req, res) => {
  let paramId = req.params.id;
  let producto = productos.filter(function (producto) {
    return producto.id == paramId;
  });

  let response =
    producto.length > 0 ? producto : { error: "producto no encontrado" };
  res.send(response);
});

routerApi.post("/productos", (req, res) => {
  producto = req.body;
  producto.id = productos.length + 1;
  productos.push(req.body);

  res.send(producto);
});

routerApi.put("/productos/:id", (req, res) => {
  //TODO: implementar metodo
  res.send(req.body);
});

routerApi.delete("/productos/:id", (req, res) => {
  // TODO: implementar metodo

  res.send(req.body);
});

app.use('/api', routerApi);

const server = app.listen(puerto, () => {
  console.log(`servidor escuchando en http://localhost:${puerto}`);
});

server.on("error", (error) => {
  console.log("error en el servidor:", error);
});