const { Router } = require("express");
const repoController = require("../controllers/repo.controller");

const router = Router();

router.get("/commits", repoController.getCommits);

module.exports = router;
