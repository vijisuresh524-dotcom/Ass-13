const express = require("express");
const router = express.Router();

const postController = require("../controller/post.controller");

router.get("/", postController.allPosts);
router.post("/add", postController.addPost);
router.put("/:id",postController.updatePost);
router.delete("/:id",postController.deletePost);

module.exports = router;