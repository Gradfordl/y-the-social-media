const express = require("express");
const router = express.Router();
const postsCtrl = require("../../controllers/api/posts.cjs");
const ensureLoggedIn = require("../../config/ensureLoggedIn.cjs")

router.use(ensureLoggedIn)
//appends to /api/posts in server

router.post("/", postsCtrl.create);

router.get("/", postsCtrl.index)

router.get("/user-posts", postsCtrl.getUserPosts)

router.put("/", postsCtrl.updatePost)

router.delete("/:id", postsCtrl.deletePost)

router.put("/comments", postsCtrl.updateComment)

router.post("/comments", postsCtrl.postComment)

// router.get("/check-token", ensureLoggedIn, postsCtrl.checkToken)

module.exports = router;
