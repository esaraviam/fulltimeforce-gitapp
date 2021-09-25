const express = require("express");
const cors = require("cors");
const mainRoutes = require("./routes/main.routes");
const repoRoutes = require("./routes/repo.routes");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3001;

    // Middlewares
    this.middlewares();

    // App Routes
    this.routes();
  }

  middlewares() {
    //CORS
    this.app.use(cors());
    // Reading and parsing of request
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());

    // Public directory
    this.app.use(express.static("public"));
  }
  routes() {
    this.app.use("/api", mainRoutes);
    this.app.use("/api/repo", repoRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(` 🚀 Server running on port ${this.port}`);
    });
  }
}

module.exports = Server;
