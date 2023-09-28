const express = require("express");
const router = express.Router();
const postsCtrl = require("../../controllers/api/posts.cjs");
const ensureLoggedIn = require("../../config/ensureLoggedIn.cjs")

//appends to /api/posts in server

router.post("/", postsCtrl.create);

router.get("/", postsCtrl.index)

// router.delete("/", postsCtrl.deletepost)

// router.get("/check-token", ensureLoggedIn, postsCtrl.checkToken)

module.exports = router;
