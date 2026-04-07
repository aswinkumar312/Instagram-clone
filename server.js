const jsonServer = require("json-server");
const path = require("path");

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db/db.json"));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const PORT = 10000;
server.listen(PORT, () => {
  console.log("Server running");
});