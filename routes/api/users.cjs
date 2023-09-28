const express = require("express");
const router = express.Router();
const usersCtrl = require("../../controllers/api/users.cjs");
const ensureLoggedIn = require("../../config/ensureLoggedIn.cjs")

// path appends to  /api/users route defined in app.use router setup in server.cjs
router.post("/", usersCtrl.create);

// /api/users/login
router.post("/login", usersCtrl.login)

router.delete("/", usersCtrl.deleteUser)

// GET /api/users/check-token
//Insert ensureLoggedIn on all routes that need protecting
router.get("/check-token", ensureLoggedIn, usersCtrl.checkToken)

module.exports = router;
