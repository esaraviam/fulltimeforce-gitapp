const { Router } = require("express");
const mainController = require("../controllers/main.controllers");

const router = Router();

router.get("/", mainController.indexRoute);

module.exports = router;
