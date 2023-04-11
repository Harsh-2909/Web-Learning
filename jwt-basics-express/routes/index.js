const express = require("express");
const { login, dashboard } = require("../controllers/main");
const authenticator = require("../middlewares/auth");
const router = express.Router({ mergeParams: true });

router.post("/login", login);
router.get("/dashboard", authenticator, dashboard);

module.exports = router;