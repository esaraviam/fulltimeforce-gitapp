require("dotenv").config();
const Server = require("./Infraestructure/server/Server");
const server = new Server();

server.listen();
