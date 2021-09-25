const { Router } = require("express");
const repoController = require("../controllers/repo.controller");

const router = Router();

router.get("/getRepo", repoController.getRepo);

module.exports = router;
